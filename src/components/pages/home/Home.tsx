import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { TweenLite } from 'gsap';
import Logo from '../../essentials/Logo';
import PreviewFeatured from './previews/PreviewFeatured';
import PreviewFill from './previews/PreviewFill';
import { StoreState } from '../../../store/state';
import { connect } from 'react-redux';
import { HomeHeroInitialState } from '../../../store/reducers/home/hero';
import HomeContent from './HomeContent';
import HomeLettersMovement from '../../../internals/HomeLettersMovement';

interface Props {
  homeHero?: HomeHeroInitialState;
}

class Home extends Component<Props> {
  public props: Props;

  componentDidUpdate(): void {
    const { homeHero: { letters, primaryCol } } = this.props;

    const homeLettersMovement = new HomeLettersMovement(letters, primaryCol);
    homeLettersMovement.startHandler();
  }

  render() {
    return (
      <Container fluid>
        <PreviewFeatured/>
        <PreviewFill/>
        <HomeContent/>
      </Container>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  homeHero: state.homeHero
});

export default connect<Props>(
  mapStateToProps
)(Home);
