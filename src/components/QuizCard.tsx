import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import quizesData from "../assets/quizes.json";
import { Link } from "react-router-dom";

interface QuizCardProps {
  searchValue: string;
}
const QuizCard = ({ searchValue }: QuizCardProps) => {
  const filteredQuizes = quizesData.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding="10px">
      {filteredQuizes.map((quiz) => (
        <Link to={`/quiz/${quiz.id}`} key={quiz.id}>
          <Card borderRadius={10} overflow="hidden">
            <Image height="100%" src={quiz.img} />
            <CardBody>
              <Heading fontSize="xl">{quiz.name}</Heading>
              <Text color="#1A365D" mt={2}>
                {quiz.questions.length} questions
              </Text>
            </CardBody>
          </Card>
        </Link>
      ))}
    </SimpleGrid>
  );
};

export default QuizCard;
