import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background: #be9b7b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: none;
`;

const Wrapper = styled.div`
  background: #be9b7b;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: #6f4436;
  border: 0.1px solid #ffffff;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  const heusticaSkills = [
    {
      title: 'Pembuatan Kue Kering',
      skills: [
        { name: 'Dekorasi Kue Kering', image: 'https://img.freepik.com/free-vector/hand-drawn-cookies-logo-design_23-2150079175.jpg?w=740&t=st=1702656847~exp=1702657447~hmac=58d92f8f826b80ff68dfc321bc47fd975569cfa537e0da6ab215d548cb1ce24d' },
        { name: 'Pembuatan Pastry', image: 'https://img.freepik.com/free-vector/sketches-kitchen-tools-bakery-products_23-2147555397.jpg?w=740&t=st=1702656619~exp=1702657219~hmac=6c42d97fe6dfe776fba74210506ef3825eb6caf98ce9db8ef5071b94a0b9c913' },
      ],
    },
    {
      title: 'Bahan Berkualitas',
      skills: [
        { name: 'Cokelat Pilihan', image: 'https://img.freepik.com/free-vector/set-different-chocolate-candies_23-2147816237.jpg?w=740&t=st=1702813509~exp=1702814109~hmac=a5291e362e272c0cd64932fef0c8cd062eb592ceda59ca3d91e949aa123f9862' },
        { name: 'Tepung Organik', image: 'https://img.freepik.com/free-vector/set-carbohydrate-food_1308-131454.jpg?w=740&t=st=1702813555~exp=1702814155~hmac=2885a6ac3c6930da749599598405e9c79d2d869e449402faa9da1a5b4bd04f6e' },
        { name: 'Produk Harian Segar', image: 'https://img.freepik.com/premium-vector/cookies-set-collection-icon-cookies-vector-illustration_255965-39.jpg?w=740' },
      ],
    },
    {
      title: 'Inovasi Rasa',
      skills: [
        { name: 'Kombinasi Unik', image: 'https://img.freepik.com/premium-vector/traditional-swedish-sweets_192280-227.jpg?w=740' },
        { name: 'Spesial Musiman', image: 'https://img.freepik.com/free-vector/hand-drawn-alfajor-illustration_23-2148774848.jpg?w=740&t=st=1702813697~exp=1702814297~hmac=964a2492ffdd0f3fedb379f8f604b8687998440d158de38af301195efa3c8d9b' },
        { name: 'Kreasi Khusus', image: 'https://img.freepik.com/free-vector/collection-unhealthy-snacks_23-2147926051.jpg?w=740&t=st=1702813732~exp=1702814332~hmac=1e22a44297651755122753e9203b3e24534d1a6c80920333c285a4ab9557fc74' },
      ],
    },
  ];

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Keahlian Heustica</Title>
        <Desc>Ini adalah beberapa keahlian yang telah kami kembangkan dalam dua tahun terakhir.</Desc>
        <SkillsContainer>
          {heusticaSkills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
