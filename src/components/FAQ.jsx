import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const filteredData = faqData.filter((item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFAQs(filteredData);
  }, [searchTerm]);

  return (
    <Container>
      <Header>
        <Title>FAQ</Title>
        <SearchInput
          type="text"
          id="search"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Header>
      <FAQContainer>
        {filteredFAQs.map((item, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {item.question}
              <Arrow>{activeIndex === index ? '▲' : '▼'}</Arrow>
            </Question>
            {activeIndex === index && <Answer>{item.answer}</Answer>}
          </FAQItem>
        ))}
        {filteredFAQs.length === 0 && <NoResults>No questions match your search.</NoResults>}
      </FAQContainer>
    </Container>
  );
};

const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a full range of event management services...',
  },
  {
    question: 'How can I request event management services for my college event?',
    answer: 'You can request our services by filling out the event request form...',
  },
  {
    question: 'What types of events do you manage?',
    answer: 'We handle a wide range of events including academic conferences...',
  },
  {
    question: 'Can student organizations request event management support?',
    answer: 'Absolutely! We encourage student organizations to reach out...',
  },
  {
    question: 'How early should I book your services for an event?',
    answer: 'For major events, it\'s best to contact us at least 2-3 months in advance...',
  },
];

const Container = styled.section`
  background: linear-gradient(to bottom left, #b5e4fb, #0a0a0b);
  color: #f0f0f0;
  padding: 10px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  background: #0e0e0f;
  padding: 20px;
  width: 100%;
  position: sticky;
  top: 0;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  z-index: 1000;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
  color: #e0e0e0;
`;

const SearchInput = styled.input`
  margin-top: 10px;
  padding: 12px;
  width: 80%;
  max-width: 600px;
  border: 2px solid #f2e6fa;
  border-radius: 5px;
  font-size: 16px;
  background-color: #2c2c2c;
  color: #f0f0f0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s, background-color 0.3s;

  &:focus {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
    background-color: #444;
    border-color: #5184f3;
  }
`;

const FAQContainer = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 10px;
`;

const FAQItem = styled.div`
  margin-bottom: 20px;
  background: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.9);
  }
`;

const Question = styled.button`
  background-color: #a5c5f0;
  color: #0e0d0d;
  cursor: pointer;
  padding: 15px;
  border: none;
  text-align: left;
  outline: none;
  font-size: 18px;
  border-radius: 10px;
  width: 100%;
  position: relative;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-bottom: 10px;

  &:hover {
    background-color: #3e5bee;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Answer = styled.div`
  padding: 15px;
  background-color: #333333;
  border-radius: 0 0 10px 10px;
  font-size: 1em;
  line-height: 1.5;
`;

const Arrow = styled.span`
  font-size: 1.5em;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s;

  ${Question}:hover & {
    color: #fff;
  }
`;

const NoResults = styled.p`
  text-align: center;
  font-size: 1.2em;
  color: #ffcc00;
`;

export default FAQ;
