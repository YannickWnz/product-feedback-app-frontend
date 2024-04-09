import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import jsonData from '../../data.json'
import { isConstructorDeclaration } from 'typescript'

export const Home = () => {

    // console.log(data)

    let requests = jsonData.productRequests


    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [isFeatureSelected, setIsFeatureSelected] = useState<boolean>(false)
    const [isBugSelected, setIsBugSelected] = useState<boolean>(false)
    // const [isSelected, setIsSelected] = useState<boolean>(false)

    const features = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

    const [selectedFeature, setSelectedFeature] = useState(features[0]);

    const [fetchedData, setfetchedData] = useState(jsonData.productRequests)

    const [isUpvoted, setIsUpvoted] = useState<boolean>(false)

    const suggestionsCount: number = 19

    const handleClick = (feature: string) => {
        setSelectedFeature(feature);
    };


    // update state if localStorage is set
    useEffect(() => {

    let selectedFeatureFromLocalStorage = localStorage.getItem('selectedFeature')
    if(selectedFeatureFromLocalStorage) setSelectedFeature(selectedFeatureFromLocalStorage)

    }, [selectedFeature])

    const selectFeature = (feature: string): void => {

        setSelectedFeature(feature)

        // set feature to local storage
        localStorage.setItem('selectedFeature', feature)

    }
    
    // console.log(fetchedData.productRequests[0].category)

    function userUpvote( upvote: number,   ) {}

    function filterCategory(category: string) {

        let result = jsonData.productRequests.filter((data) => data.category === category )

        setfetchedData(result)

    }

    function sortBy(a: string) {

        switch (a.toLowerCase()) {
            case 'most upvotes':
                let sortByMostUpvotes = [...fetchedData].sort((a, b) => b.upvotes - a.upvotes);
                setfetchedData(sortByMostUpvotes)
                break;
            case 'least upvotes':
                let sortByLeastUpvotes = [...fetchedData].sort((a, b) => a.upvotes - b.upvotes);
                setfetchedData(sortByLeastUpvotes)
                break;
            case 'least comments':
                const sortByLeastComments = [...fetchedData].sort((a, b) => {
                    const commentsA = a.comments ? a.comments.length : 0;
                    const commentsB = b.comments ? b.comments.length : 0;
                    return commentsA - commentsB;
                });
                setfetchedData(sortByLeastComments);
                break
            case 'most comments':
                const sortByMostComments = [...fetchedData].sort((a, b) => {
                    const commentsA = a.comments ? a.comments.length : 0;
                    const commentsB = b.comments ? b.comments.length : 0;
                    return commentsB - commentsA;
                });
                setfetchedData(sortByMostComments);
                break
            default:
                break;
        }

    }

    useEffect(() => {
    }, [])





    return (
        <section className="home">
            <div className="home-container">
                <aside className="sidebar">
                    <div className="company-name-section">
                        <h1>Frontend Mentor</h1>
                        <p>Feedback Board</p>
                    </div>
                    <div className="features-section">

                        <ul>
                            {features.length > 0 && features.map((feature, index) => (
                                <li
                                    key={index}
                                    className={`${selectedFeature === feature ? 'selected-feature' : ''}`}
                                    onClick={() => {
                                        selectFeature(feature)
                                    }}
                                >{feature}</li>
                            ))}
                        </ul>

                    </div>
                    <div className="roadmap">
                        <div className="section-name">
                            <h1>Roadmap</h1>
                            <Link to='/'>View</Link>
                        </div>
                        <div className="roadmap-categories">
                            <ul>
                                <div className="planned">
                                    <li>Planned</li>
                                    <span>2</span>
                                </div>
                                <div className="in-progress">
                                    <li>In-Progress</li>
                                    <span>1</span>
                                </div>
                                <div className="live">
                                    <li>Live</li>
                                    <span>3</span>
                                </div>
                            </ul>
                        </div>
                    </div>
                </aside>
                <div className="feedback-feed">
                    <nav>
                        <div className="first-nav-section">
                            <img src="../starter-code/assets/suggestions/icon-suggestions.svg" alt="" />
                            <div className="suggestions-count">
                                <h1>{suggestionsCount} {`${suggestionsCount == 1 ? 'Suggestion' : 'Suggestions'}`}</h1>
                            </div>
                            <div className="filter-section">
                                <label htmlFor="filters">Sort by:</label>
                                <select 
                                name="filters"
                                id=""
                                onChange={(e) => {
                                    // console.log('boy been changing', e.target.value)
                                    sortBy(e.target.value)
                                }}
                                >
                                    <option value="Most upvotes">Most upvotes</option>
                                    <option value="Least upvotes">Least upvotes</option>
                                    <option value="Most comments">Most comments</option>
                                    <option value="Least comments">Least comments</option>
                                </select>
                            </div>
                        </div>
                        <div className="add-feedback-btn">
                            <Link to='/new-feedback'><img src="../starter-code/assets/shared/icon-new-feedback.svg" alt="" /> <span>Add Feedback</span></Link>
                        </div>

                    </nav>

                    {fetchedData.length > 0 && fetchedData.map((data,index) => {
                        return (
                            <div className="feed-section">
                                <div className="feed-first-section">
                                    <div className="votes-count">
                                        <img src="../starter-code/assets/shared/icon-arrow-up.svg" alt="" />
                                        <span
                                            onClick={() => {
                                                console.log(data.upvotes)
                                            }}
                                        >{data.upvotes}</span>
                                    </div>
                                    <div className="suggestion-details">
                                        <h1>{data.title}</h1>
                                        <p>{data.description}</p>
                                        <ul>
                                            <li>{data.category}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="comments-number">
                                    <img src="../starter-code/assets/shared/icon-comments.svg" alt="" />
                                    {<span>{data.comments ? data.comments.length : '0'}</span>}
                                </div>
                            </div>
                        )
                    })}

                    {/* <div className="feed-section">
                        <div className="feed-first-section">
                            <div className="votes-count">
                                <img src="../starter-code/assets/shared/icon-arrow-up.svg" alt="" />
                                <span>999</span>
                            </div>
                            <div className="suggestion-details">
                                <h1>Add tags for solutions</h1>
                                <p>Easier to search for solutions based on specific stack</p>
                                <ul>
                                    <li>Feature</li>
                                </ul>
                            </div>
                        </div>
                        <div className="comments-number">
                            <img src="../starter-code/assets/shared/icon-comments.svg" alt="" />
                            <span>2</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}