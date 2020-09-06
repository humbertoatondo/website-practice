import './ServiceCard.css';
import { ReactComponent as MenuIcon } from '../../icons/bx-menu.svg';
import { ReactComponent as DesignIcon } from '../../icons/design.svg';
import { ReactComponent as CodeIcon } from '../../icons/code.svg';
import { ReactComponent as CameraIcon } from '../../icons/camera.svg';
import { ReactComponent as SeoIcon } from '../../icons/seo.svg';
import { ReactComponent as MarketingIcon } from '../../icons/marketing.svg';
import { ReactComponent as InfographicsIcon } from '../../icons/infographics.svg';

import React from 'react';

class ServiceCard extends React.Component {

    getCardTitle = (cardType) => {
        switch (cardType) {
            case "design":
                return "Graphic Design";
            case "code":
                return "Web Design";
            case "video":
                return "Video Production";
            case "seo":
                return "SEO";
            case "marketing":
                return "Marketing";
            case "infographics":
                return "Infographics";
            default:
                return "Well... No luck"
        }
    }

    getCardIcon = (cardType) => {
        switch (cardType) {
            case "design":
                return <DesignIcon className="service-card-icon" />
            case "code":
                return <CodeIcon className="service-card-icon" />
            case "video":
                return <CameraIcon className="service-card-icon" />
            case "seo":
                return <SeoIcon className="service-card-icon" />
            case "marketing":
                return <MarketingIcon className="service-card-icon" />
            case "infographics":
                return <InfographicsIcon className="service-card-icon" />
            default:
                return <MenuIcon className="service-card-icon" />
        }
    }

    render() {
        const gridAreaName = this.props.gridAreaName;
        const cardType = this.props.type;
        const cardTitle = this.getCardTitle(cardType);
        const cardIcon = this.getCardIcon(cardType);

        return (
            <div
                className="service-card-container"
                style={{ gridArea: gridAreaName }}
            >
                <div className="service-card-icon-container">
                    {cardIcon}
                </div>
                <div className="service-card-text-container">
                    <h3 className="service-card-text-title">{cardTitle}</h3>
                    <p className="service-card-text-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus maxime eius quo consequuntur magni.
                        Quis voluptate repudiandae soluta quod mollitia!
                    </p>
                    <button className="service-card-readmore-button">Read more --></button>
                </div>
            </div>
        );
    }
}

export default ServiceCard;