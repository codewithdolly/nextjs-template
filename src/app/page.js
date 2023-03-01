// import { Container, SimpleGrid, Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return { posts };
}

export default Home;