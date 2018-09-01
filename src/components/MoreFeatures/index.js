import React from "react";

const MoreFeatures = () => {
    return(
        <div class="moreFeatures">
            <div class="heading">Even more features</div>
            <div class="featuresGrid">
                <div>
                    <FeatureGridItem iconClass="angleAdjustIcon" label="Choose from 2 adjustable" />
                    <FeatureGridItem iconClass="tunerIcon" label="Digitally tunes to" />
                    <FeatureGridItem iconClass="pairIcon" label="Pair 2 speakers for" />
                </div>
                <div>
                    <FeatureGridItem iconClass="streamSoftwareIcon" label="Stream" />
                    <FeatureGridItem iconClass="turntableIcon" label="Turntable (AUX input)" />
                    <FeatureGridItem iconClass="speakerGroupIcon" label="Group speakers" />
                </div>
            </div>
        </div> 
    );
};



function FeatureGridItem(props) {
    const iconClass = props.iconClass + " featureGridItemIcon";
    return (
        <div class="featureGridItem">
            <div class={iconClass} />
            <div>{props.label}</div>
        </div>
    );
};
  
export default MoreFeatures;