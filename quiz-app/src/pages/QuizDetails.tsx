/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Text } from "@chakra-ui/react";
import quizesData from "../assets/quizes.json";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Progress } from "@chakra-ui/react";

const QuizDetails = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const quiz = quizesData.find((quiz) => quiz.id === parseInt(quizId!));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quiz?.questions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const progress = (currentQuestionIndex / quiz!.questions.length) * 100;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < quiz!.questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  const navigate = useNavigate();

  return (
    <>
      {showResults ? (
        <Box display="flex" flexDirection="column" width="50%" m="20px auto">
          <Text textAlign="center" fontSize="xl">
            Your Results
          </Text>
          <Text textAlign="center" fontSize="5xl" fontWeight="bold" my="10px">
            {score}/{quiz?.questions.length}
          </Text>
          <Button
            onClick={() => navigate("/")}
            colorScheme="purple"
            variant="link"
            size="lg"
          >
            Go Back
          </Button>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          width={{ sm: "40%", lg: "50%" }}
          mx="auto"
          mt="20px"
        >
          <Text fontSize="2xl" mb="10px" fontWeight="bold">
            Question {currentQuestionIndex + 1}/{quiz!.questions.length}
          </Text>
          <Progress
            height="32px"
            value={progress}
            colorScheme="orange"
            width={{ sm: "60%", lg: "30%" }}
            border="2px"
            borderColor="orange"
            backgroundColor="white"
          />
          <Text fontSize="2xl" my="20px">
            {currentQuestion?.text}
          </Text>
          {currentQuestion?.options.map((option) => (
            <Button
              key={option.id}
              onClick={() => handleAnswer(option.isCorrect)}
              variant="outline"
              mt={3}
              display="flex"
              justifyContent="flex-start"
              backgroundColor="#FEEBC8"
              size="sm"
            >
              {`${option.label} ${option.text}`}
            </Button>
          ))}
        </Box>
      )}
    </>
  );
};

export default QuizDetails;
