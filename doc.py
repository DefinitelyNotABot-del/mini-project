import joblib
from sklearn.svm import SVC

# Example: Training your model
X = [[100, 50], [200, 80], [50, 30], [400, 150]]  # Replace with real feature data
y = [1, 1, 0, 0]  # Labels (1: Real, 0: Fake)

model = SVC(kernel='linear')  # Train an SVM classifier
model.fit(X, y)

# Save the model to a file
joblib.dump(model, 'document_verification_model.pkl')