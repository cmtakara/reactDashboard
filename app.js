//components that are needed
// container for everything
// column for navigation, reviews, rating, sentiment, and website visitors

// navigation is a column the height of all of the content
// reviews, rating, and sentiment are all in a row
// that row is in a column with website visitors (which has a graphic inside)

// React Class Component
class Navigation extends React.Component {
    render () {
        return (
            <div className='navigation'>
                <a>Dashboard</a> <br />
                <a>Widget</a> <br />
                <a>Reviews</a> <br />
                <a>Customers</a> <br />
                <a>Online Analysis</a> <br />
                <a>Settings</a>
            </div>        
        )
    }
}

//Reviews, Average rating, and Sentiment Analysis are all in TopRow
class Reviews extends React.Component {
    render () {
        return (
            <div className='reviews'>
                <p> Reviews </p>
                <h2>1,281</h2>
            </div>
        )
    }
}

class AverageRating extends React.Component {
    render () {
        return (
            <div className='averageRating'>
                <p> Average Rating </p>
                <h2>4.6</h2>
            </div>
        )
    }
}

class SentimentAnalysis extends React.Component {
    render () {
        return (
            <div className='sentimentAnalysis'>
                <p> Sentiment Analysis </p>
                <h2>960</h2>
                <h2>122</h2>
                <h2>321</h2>
            </div>
        )
    }
}
// Component is a container for the three other components: reviews, average rating, and sentiment analysis
// there isn't any other content
class TopRow extends React.Component {
    render () {
        return (
            <div className='topRow'>
                <Reviews />
                <AverageRating />
                <SentimentAnalysis />
            </div>        
        )
    }
}

// this is the place-holder for the graphic for visitors
class VisitorGraph extends React.Component {
    render () {
        return (
            <div className='visitorGraph'></div>
        )
    }
}

// Visitors has an image that is a graphic representation of the number of website visitors
class Visitors extends React.Component {
    render () {
        return (
            <div className='visitors'>
                <p> Website Visitors </p>
                <p> 821</p>
                <VisitorGraph />
            </div>        
        )
    }
}

// The container component for top row and visitors
class AnalyticsContent extends React.Component {
    render () {
        return (
            <div className='analyticsContent'>
                <TopRow />
                <Visitors />
            </div>        
        )
    }
}


// React Class Component - App is the major container for all of the other components
class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <Navigation />
                <AnalyticsContent />
            </div>        
        )
    }
}

ReactDOM.render(
    // This contains all of the content
    // App contains all of the other components
    <App />,
    document.querySelector('#container')
)