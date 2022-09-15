//buat ngapit error
import React, {logComponentStackToMyService} from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStatefromError(error) {
        //Update state so the next render will show the fallback UI
        return { hasError: true }; //ini default
    }

    //ngecek disini adad error apa ga
    componentDidCatch(error, info) {
        logComponentStackToMyService(info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            //You can render any custom fallback UI
            return (
                <>
                <div>
                    <h1>Something went wrong</h1>
                    <span>Back to Home</span>
                </div>
                </>
                )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;