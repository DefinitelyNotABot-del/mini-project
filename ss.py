from flask import Flask, request, jsonify
import cv2
import pytesseract
import numpy as np
from sklearn.svm import SVC
import joblib

app = Flask(__name__)

# Paths to the training images and corresponding labels
image_paths = ['p3r7x1.jpg', 'p3r7x2.jpg', 'p3r7x3.jpg', 'x5f9k1.jpg', 'x5f9k2.jpg', 'x5f9k3.jpg']
labels = [1, 1, 1, 0, 0, 0]  # 6 labels for 6 images

# Function to preprocess the image
def preprocess_image(image):
    image = cv2.resize(image, (512, 512))
    image = cv2.GaussianBlur(image, (5, 5), 0)
    _, binary = cv2.threshold(image, 128, 255, cv2.THRESH_BINARY)
    return binary

# Function to extract features from the image
def extract_features(image):
    preprocessed_image = preprocess_image(image)
    
    # Extract text-based feature
    ocr_text = pytesseract.image_to_string(preprocessed_image)
    text_length = len(ocr_text)
    
    # Extract ORB-based feature
    orb = cv2.ORB_create()
    keypoints, _ = orb.detectAndCompute(preprocessed_image, None)
    num_keypoints = len(keypoints)
    
    return [text_length, num_keypoints]

# Function to create a dataset
def create_dataset(image_paths, labels):
    features = []
    valid_labels = []
    
    for image_path, label in zip(image_paths, labels):
        image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
        if image is None:
            print(f"Error loading image: {image_path}. Skipping...")
            continue
        features.append(extract_features(image))
        valid_labels.append(label)  # Append label only if image is valid
    
    return np.array(features), np.array(valid_labels)

# Train the SVM model and save it
def train_and_save_model(image_paths, labels):
    X, y = create_dataset(image_paths, labels)
    if len(X) == 0 or len(y) == 0:
        raise ValueError("No valid data to train the model.")
    
    print(f"Training with {len(X)} samples...")
    model = SVC(kernel='linear', probability=True)
    model.fit(X, y)
    joblib.dump(model, 'document_verification_model.pkl')
    print("Model trained and saved as 'document_verification_model.pkl'.")

# Uncomment the following line to train and save the model before running the Flask app
train_and_save_model(image_paths, labels)

# Load the pre-trained SVM model
model = joblib.load('document_verification_model.pkl')

@app.route('/verify', methods=['POST'])
def verify_document():
    file = request.files['file']
    np_image = np.fromfile(file, np.uint8)
    image = cv2.imdecode(np_image, cv2.IMREAD_GRAYSCALE)

    features = extract_features(image)
    prediction = model.predict([features])
    result = "Real" if prediction[0] == 1 else "Fake"

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
