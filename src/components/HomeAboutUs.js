import React from 'react';
import Signature from "./Icons/Signature"

class HomeAboutUs extends React.Component {
    render() {
        return (
            <>
                <div className={"aboutus__container"}>
                    <article className={"aboutus__article"}>
                        <h1 className={"aboutus__title"}>O nas</h1>
                        <div className={"line"}></div>
                        <p className={"aboutus__text"}>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <Signature className={"aboutus__signature"} />
                    </article>
                    <div className={"aboutus__picture"}></div>
                </div>
            </>
        )
    }
}
export default HomeAboutUs;