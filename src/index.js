import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import Wrapper from "./styled/Wrapper";
import H3 from "./styled/H3";
import BorderBox from "./styled/BorderBox";
import P from "./styled/P";
import Hr from "./styled/Hr";

import { Lorem } from "./data/Lorem";
import { CardButton } from "./components/CardButton";

const theme = {};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <H3 primary>Styled Components</H3>
          <BorderBox>
            <Wrapper>
              <P>
                Nulla eleifend ex vitae rhoncus cursus. Integer sed orci
                aliquet, condimentum quam et, pretium justo. Morbi nec libero
                sit amet tellus bibendum faucibus. Donec ac leo nec tortor
                ornare bibendum quis quis est. Nam tempor, leo nec commodo
                finibus, nulla lectus dignissim sem, sit amet porttitor orci
                purus sed nulla. Maecenas volutpat sem orci, et dapibus elit
                lobortis eget. Etiam ultricies metus eu accumsan varius.
                Suspendisse ornare risus et leo aliquet vulputate. Maecenas
                tincidunt nisl non quam tempus cursus. Donec interdum lorem
                augue, sit amet feugiat augue dignissim at. Nullam sit amet elit
                porttitor, eleifend velit sed, interdum est. Ut vehicula elit id
                pretium ornare. Fusce accumsan non diam id consequat. Morbi
                bibendum nunc at tortor maximus, sit amet ullamcorper velit
                efficitur. Nullam vestibulum dolor vitae lorem dapibus, nec
                fermentum eros convallis. Morbi mattis lacus hendrerit, varius
                enim id, vehicula justo.
              </P>
              {this.state.isActive && <Lorem />}
            </Wrapper>
          </BorderBox>
          <CardButton
            handleClick={this.handleClick}
            title={this.state.isActive ? "View Less" : "View More"}
          />
          <Hr />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
