import React from 'react';

export default class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onUseridChange = this.onUseridChange.bind(this);
        this.onReviewChange = this.onReviewChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onSourceChange = this.onSourceChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            userid: '',
            review: '',
            rating: '',
            source: '',
            error: ''
        };
    }

    onTitleChange(e) {
        const title = e.target.value;
        this.setState((state) => ({ ...state, title: title }));
    }

    onUseridChange(e) {
        const userid = e.target.value;
        this.setState((state) => ({ ...state, userid: userid }));
    }

    onReviewChange(e) {
        const review = e.target.value;
        this.setState((state) => ({ ...state, review: review }));
    }

    onRatingChange(e) {
        const rating = parseInt(e.target.value);
        this.setState((state) => ({ ...state, rating: rating }));
    }

    onSourceChange(e) {
        const source = e.target.value;
        this.setState((state) => ({ ...state, source: source }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.title || !this.state.userid || !this.state.review  || !this.state.source  || !this.state.rating) {
            this.setState((state) => ({ ...state, error: "Please input all the required values " }));
        } else {
            this.setState((state) => ({ ...state, error: '' }));
            this.props.onSubmitFeedback(
                {
                    title: this.state.title,
                    userid: this.state.userid,
                    review: this.state.review,
                    rating: this.state.rating,
                    source: this.state.source
                }
            );
        }
    }

    render() {
        return (
            <div> 
                <form onSubmit={this.onSubmit} className="form-group m-4">           
                    <input className="form-control m-1 w-50" required type="text" placeholder="Enter Title here..." value={this.state.title} onChange={this.onTitleChange}/>
                    <input className="form-control m-1 w-25" required type="number" placeholder="Enter Rating here..." max= '5' min= '1' value={this.state.rating} onChange={this.onRatingChange}/>
                    <input className="form-control m-1 w-50"  required type="text"  placeholder="Enter User-Id here..." value={this.state.userid} onChange={this.onUseridChange}/>
                    <input className="form-control m-1 w-50" required type="text" placeholder="Enter Source here..." value={this.state.source} onChange={this.onSourceChange}/>
                    <textarea className="form-control m-1 w-50" required rows ='5' cols="60" placeholder="Enter Feedback here..." value={this.state.review} onChange={this.onReviewChange}/>
                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}
                    <button className="btn btn-primary m-1 w-25">Add Feeback</button>
                </form>
            </div>
        );
    }
}