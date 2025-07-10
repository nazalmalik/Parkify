import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaLock, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();  // Using the useNavigate hook

  // Function to go back to the previous page
  const handleGoBack = () => {
    navigate(-1);  // -1 takes the user to the previous page in history
  };

  return (
    <Container fluid className="bg-dark min-vh-100 text-white py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 fw-bold text-warning">Privacy Policy</h1>
            <p className="lead">Your privacy is important to us. Read how we protect your personal information.</p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {/* Introduction Section */}
          <Col md={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-3 text-center"
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center p-5">
                <FaLock size={60} color="#ffffff" />
                <h3 className="fw-bold mt-3 text-white">Introduction</h3>
                <p className="text-white mt-3">
                  Your privacy is our top priority. This policy outlines how we collect, use, and protect your personal data.
                </p>
              </Card.Body>
            </motion.div>
          </Col>

          {/* Data Collection Section */}
          <Col md={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 shadow-lg rounded-3 text-center"
            >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center p-5">
                <FaShieldAlt size={60} color="#ffffff" />
                <h3 className="fw-bold mt-3 text-white">Data Collection</h3>
                <p className="text-white mt-3">
                  We collect data such as your name, email, and other necessary details to provide our services effectively.
                </p>
              </Card.Body>
            </motion.div>
          </Col>
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h2 className="fw-bold text-white">How We Use Your Data</h2>
            <p className="text-muted">We are transparent about how we handle and use your personal information.</p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center mt-4">
          <Col md={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-3 p-5 text-center"
            >
              <h4 className="text-white fw-bold">Usage of Information</h4>
              <p className="text-white">
                We use the collected information to improve our services, personalize your experience, and communicate with you.
              </p>
            </motion.div>
          </Col>

          <Col md={8}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg rounded-3 p-5 text-center"
            >
              <h4 className="text-white fw-bold">Data Protection</h4>
              <p className="text-white">
                Your data is protected through encryption and other security measures to ensure it remains safe and secure.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* Back Button */}
        <Row className="text-center mt-5">
          <Col>
            <Button
              variant="secondary"
              onClick={handleGoBack}  // Trigger goBack function on button click
              className="px-4 py-2 rounded-lg"
            >
              Go Back
            </Button>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default PrivacyPolicy;
