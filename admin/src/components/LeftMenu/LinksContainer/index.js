import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinksContainer = styled.div`
  padding-top: 0.7rem;
  position: absolute;
  top: ${props => props.theme.main.sizes.leftMenu.height};
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  height: calc(100vh - (${props => props.theme.main.sizes.leftMenu.height} + 3rem));
  box-sizing: border-box;

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  & > :first-child span, & > :nth-child(3) span { /* esconder títulos de tipos singulares e coleções */
    display: none;
  }

  & > :first-child::before {
    content: 'Conteúdo Dinâmico';
    font-size: 10px;
  }
  & > :nth-child(3)::before {
    content: 'Conteúdo Institucional';
    font-size: 10px;
  }

  /*& > :nth-child(n+5) { !* esconder demais opções do sideBar *!
    display: none;
  }*/
`;

LinksContainer.defaultProps = {
  theme: {
    main: {
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

LinksContainer.propTypes = {
  theme: PropTypes.object,
};

export default LinksContainer;
