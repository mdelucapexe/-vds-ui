var material = require('@mui/material');
var styles = require('@mui/styles');
var React = require('react');
var bi = require('react-icons/bi');

var StyledPageTitle = styles.styled('div')({
  borderBottom: '2px solid #0090D1',
  display: 'flex'
});
var StyledTitleContainer = styles.styled('div')(function () {
  return {
    'flex-grow': 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '9px 13px',
    justifyContent: 'center',
    backgroundColor: 'white',
    '& .title': {
      fontSize: '16px',
      color: '#005075',
      letterSpacing: '0',
      fontFamily: 'Cairo SemiBold',
      fontWeight: 600,
      textAlign: 'center'
    },
    '& .description': {
      '& .MuiLink-root': {
        fontWeight: 400,
        fontSize: '12px',
        color: '#0090D1',
        textDecoration: 'none!important'
      },
      '& :not(.MuiLink-root)': {
        fontSize: '12px',
        color: '#005075',
        fontStyle: 'bold',
        fontWeight: 700
      },
      '& svg': {
        fontSize: '12px',
        backgroundColor: 'white',
        color: '#0090D1'
      },
      display: 'flex',
      justifyContent: 'center',
      fontSize: '12px',
      color: '#5A6872',
      letterSpacing: '0',
      fontFamily: 'Roboto',
      lineHeight: "10px",
      fontWeight: 400,
      textAlign: 'center'
    }
  };
});
var PageTitle = function PageTitle(props) {
  var title = props.title,
    actions = props.actions,
    content = props.content,
    historyBackEvent = props.historyBackEvent,
    _props$textAlign = props.textAlign,
    textAlign = _props$textAlign === void 0 ? 'center' : _props$textAlign;
  return React.createElement(StyledPageTitle, null, React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      textAlign: textAlign,
      backgroundColor: 'white',
      paddingLeft: '8px'
    }
  }, historyBackEvent && React.createElement(material.IconButton, {
    onClick: historyBackEvent
  }, React.createElement(bi.BiArrowBack, {
    style: {
      color: "#0090D1",
      fontWeight: 400
    }
  }))), React.createElement(StyledTitleContainer, null, React.createElement("span", {
    className: "title"
  }, title.toUpperCase()), content && React.createElement("span", {
    className: "description"
  }, content)), actions && React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      textAlign: textAlign,
      backgroundColor: 'white',
      paddingRight: '8px'
    }
  }, actions));
};

exports.PageTitle = PageTitle;
//# sourceMappingURL=index.js.map
