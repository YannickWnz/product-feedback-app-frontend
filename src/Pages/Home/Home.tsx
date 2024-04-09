import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import data from '../../data.json'

export const Home = () => {

    // console.log(data)

    let requests = data.productRequests


    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [isFeatureSelected, setIsFeatureSelected] = useState<boolean>(false)
    const [isBugSelected, setIsBugSelected] = useState<boolean>(false)
    // const [isSelected, setIsSelected] = useState<boolean>(false)

    const features = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

    const [selectedFeature, setSelectedFeature] = useState(features[0]);

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
    
    function userUpvote( upvote: number,   ) {

    }




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
                                <select name="filters" id="">
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

                    {requests.length > 0 && requests.map((data,index) => {
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
                                    <span>{data.comments?.length}</span>
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