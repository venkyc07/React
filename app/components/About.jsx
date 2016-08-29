var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//        <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-centered">About</h1>
      <p>
        This is a weather application build on React. I have built this
        for the complete react web app  Developer Course.
      </p>
      <p>
        Here are the some of the Tools i used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the  JavaScripet framework used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open WeatherMap</a> - I used
            Open Weather Map  to search for weather data by the city name.
        </li>
      </ul>
     </div>
  );
};

module.exports = About;
