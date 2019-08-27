import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

class LibraryList extends Component {
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>{this.props.libraries[1].title.toString()}</Text>
                <Text>{this.props.libraries[1].description.toString()}</Text>
            </View>
        );
    };
}

const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
