import Image from 'next/image'
import styled from 'styled-components';

const AppCard = ({ href, imageSrc, imageAlt, title, description }) => (
    <ScCard href={href} target='_blank' rel="noopener noreferrer">
      <ScCardInner>
        <ScCardInnerWrapper>
          <ScImageWrapper>
            <Image 
              src={imageSrc} 
              alt={imageAlt} 
              fill={true}
              sizes="36px"
            />
          </ScImageWrapper>
          <ScCardText>
            <ScCardTitle>{title}</ScCardTitle>
            <ScCardDescription>{description}</ScCardDescription>
          </ScCardText>
        </ScCardInnerWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={20} height={20}>
          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
        </svg>
      </ScCardInner>
    </ScCard>
  );

export default AppCard;

const ScCard = styled.a`
background: var(--color-card);
color: var(--color-text);
border-radius: 12px;

&:hover {
  color: var(--color-text);
  background: var(--color-card-hover);
}

&:visited, &:focused {
  color: var(--color-text);
}
`;

const ScCardInner = styled.div`
display: inline-flex;
gap: 16px;
align-items: center;
padding: 8px;
justify-content: space-between;
width: 100%;
box-sizing: border-box;
`;

const ScImageWrapper = styled.div`
position: relative;
width: 36px;
height: 36px;
min-width: 36px;
border-radius: 8px;
overflow: hidden;
`;

const ScCardTitle = styled.div`
font-size: 14px;
font-weight: 500;
line-height: 20px;
`;

const ScCardDescription = styled.div`
font-size: 12px;
line-height: 16px;
color: var(--color-muted);
`;

const ScCardText = styled.div`
display: flex;
flex-direction: column;
`;

const ScCardInnerWrapper = styled.div`
display: flex;
gap: 16px;
`;