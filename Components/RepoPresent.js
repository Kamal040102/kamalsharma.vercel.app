import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function RepoPresent(props){
    return(
        <div className="col-sm-12 col-md-6 col-lg-3 text-black my-5">
                <AnimationOnScroll animateIn="animate__fadeInDown">
            <div className="card">
                <h5 className="card-header font-bold">{props.title}</h5>
                <div className="card-body">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text mb-3">{props.desc.slice(0,60)}...</p>
                    <a href={props.link} className="btn btn-primary">Know More</a>
                </div>
            </div>
        </AnimationOnScroll>
        </div>
    )
}