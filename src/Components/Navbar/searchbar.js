
import React from 'react';
import Autosuggest from 'react-autosuggest';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from "react-redux";
import { AppActions } from "../../store/actions"
import { Server } from "../Services"

import "./searchbar.css"
const languages = [
    {
        name: 'About ALHAJ',
    },
    {
        name: 'About Proton',
    },
    {
        name: 'ADAS System',
    },
    {
        name: 'Apollo Motors',
    },
  
    {
        name: 'Book Saga',
    },
    {
        name: 'Book X70',
    },
    {
        name: 'Brochure Saga',
    },
    {
        name: 'Brochure X70',
    },
    {
        name: 'Contact Us',
    },
    {
        name: 'Dealerships',
    },
   
    {
        name: 'Proton Brand',
    },
    {
        name: 'Proton Dealerships',
    },
    {
        name: 'Proton International',
    },
    {
        name: 'Proton Saga',
    },
    {
        name: 'Proton Warranty',
    },
    {
        name: 'Proton X70',
    },
    {
        name: 'News',
    },
    {
        name: 'Saga',
    },
    {
        name: 'Saga CC',
    },
    {
        name: 'Saga Features',
    },
    {
        name: 'Saga Variants',
    },
    {
        name: 'Saga Price',
    },
    {
        name: 'Saga Safety',
    },
    {
        name: 'SUV',
    },
    
    {
        name: 'X70',
    },
    {
        name: 'X70 ADAS',
    },
    {
        name: 'X70 CC',
    },
    {
        name: 'X70 Features',
    },
    {
        name: 'X70 Interior',
    },
    {
        name: 'X70 Price',
    },
    {
        name: 'X70 Safety',
    },
    {
        name: 'Islamabad Motors',
    },
    {
        name: 'Momentum Motors',
    },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

class Searchbar extends React.Component {
    constructor(props) {
        super();

        this.state = {
            value: '',
            suggestions: [],
            searchInput: false,
            searchIcon:true
        };
    }


    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    searchbuttonClick() {
        this.setState({ searchInput: true,searchIcon:false })
      

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.searchglobalvalue !==undefined){
            
            if (nextProps.searchglobalvalue === "About ALHAJ" ) {
                nextProps.history.push({
                    pathname: '/About',
                   
                })
                this.setState({value:''})
            }

            else if(nextProps.searchglobalvalue === "About Proton" || nextProps.searchglobalvalue === "Proton Brand"  ){
                nextProps.history.push({
                    pathname: '/About-Proton',
                   
                })
                this.setState({value:''})
            }

            else if(nextProps.searchglobalvalue === "ADAS System" || nextProps.searchglobalvalue === "Proton X70" || nextProps.searchglobalvalue === "SUV" || nextProps.searchglobalvalue === "X70" || nextProps.searchglobalvalue === "X70 ADAS" || nextProps.searchglobalvalue === "X70 CC" || nextProps.searchglobalvalue === "X70 Features" || nextProps.searchglobalvalue === "X70 Interior" || nextProps.searchglobalvalue === "X70 Price" || nextProps.searchglobalvalue === "X70 Safety" ){
                nextProps.history.push({
                    pathname: '/x70',
                })
                this.setState({value:''})
            }
        

            else if(nextProps.searchglobalvalue === "Book Saga" ){
                nextProps.history.push({
                    pathname: '/Saga-Booking',
                })
                this.setState({value:''})
            }

            else if(nextProps.searchglobalvalue === "Book X70" ){
                nextProps.history.push({
                    pathname: '/X70-Booking',
                })
                this.setState({value:''})
            }

        

            else if(nextProps.searchglobalvalue === "Contact Us" ){
                nextProps.history.push({
                    pathname: '/Contact',
                })
                this.setState({value:''})
            }

            else if(nextProps.searchglobalvalue === "Dealerships" || nextProps.searchglobalvalue === "Apollo Motors" || nextProps.searchglobalvalue === "Proton Dealerships"  ){
                window.open(`${Server}/dealerInfo?city=karachiApollo`, '_blank')
                this.setState({value:''})
            }
            else if(nextProps.searchglobalvalue === "Islamabad Motors" ){
                window.open(`${Server}/dealerInfo?city=Islamabad`, '_blank')
                this.setState({value:''})
            }
            else if(nextProps.searchglobalvalue === "Proton International" ){
                window.open(`https://www.proton.com`, '_blank')
                this.setState({value:''})
            }

            else if(nextProps.searchglobalvalue === "Proton Saga" || nextProps.searchglobalvalue === "Saga" || nextProps.searchglobalvalue === "Saga CC" || nextProps.searchglobalvalue === "Saga Features" || nextProps.searchglobalvalue === "Saga Variants" || nextProps.searchglobalvalue === "Saga Price" || nextProps.searchglobalvalue === "Saga Safety"  ){
                nextProps.history.push({
                    pathname: '/proton-saga',
                })
                this.setState({value:''})
            }
            else if(nextProps.searchglobalvalue === "Proton Warranty" ){
                nextProps.history.push({
                    pathname: '/Warranty',
                })
                this.setState({value:''})
            }

            else if(nextProps.searchglobalvalue === "Momentum Motors" ){
                window.open(`${Server}/dealerInfo?city=Lahore`, '_blank')
                this.setState({value:''})
            }

        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.searchGlobal(this.state.value);
    };





    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search",
            value,
            onChange: this.onChange,
        };

        return (
            <div className="searchM" style={{ display: "flex" }}>
                {this.state.searchInput &&
                    <form onSubmit={this.onFormSubmit}>
                        <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            value={this.state.value}
                        />
                    </form>

                }
                {this.state.searchIcon &&
                <SearchIcon className="searchIcon" onClick={this.searchbuttonClick.bind(this)} style={{ color: "grey",height:"25px",width:"25px",marginRight:"20px" }} />
                }
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        searchglobalvalue: state.AppReducer.searchglobalvalue, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchGlobal: (payload) => dispatch(AppActions.searchGlobal(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);