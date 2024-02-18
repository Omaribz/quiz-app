import {
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import quizesData from "../assets/quizes.json";

interface Options {
  id: number;
  label: string;
  text: string;
  isCorrect: boolean;
}
interface Quiz {
  id: number;
  text: string;
  options: Options[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface QuizResponse {
  id: number;
  img: string;
  name: string;
  questions: Quiz[];
}

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
        <Card key={quiz.id} borderRadius={10} overflow="hidden">
          <Image src={quiz.img} />
          <CardBody>
            <Heading fontSize="2xl">{quiz.name}</Heading>
            <Text color="#1A365D" mt={2}>
              {quiz.questions.length} questions
            </Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default QuizCard;
