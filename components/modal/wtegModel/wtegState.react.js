const Data = {
  style: {
    img: {
      maxWidth: '100%'
    },
    span: {
      display: 'block',
      textAlign: 'center',
      paddingBottom: '.4em'
    },
    thumbnailWrapper: {
      maxWidth: '35%',
      float: 'right',
      position: 'relative',
      border: '1px solid #ddd'
    }
  },
  gtm: {
    closeWindow: {
      event: 'Popup',
      eventCategory: 'What to expect guide popup image',
      eventAction: 'Close window'
    },
    escKey: {
      event: 'Popup',
      eventCategory: 'What to expect guide popup image',
      eventAction: 'Esc key pressed'
    },
    clicksAway: {
      event: 'Popup',
      eventCategory: 'What to expect guide popup image',
      eventAction: 'Clicked outside window'
    }
  }
};

export default Data;
