import { ReactElement } from "react";
import ContentBody from "components/layouts/ContentBody";
import KakaoMap from "components/map/KakaoMap";

function PlanContainer(): ReactElement {
    return (
        <ContentBody>
            <div className="absolute w-screen h-screen left-0 top-0">
                <KakaoMap />
            </div>
        </ContentBody>
    );
}

export default PlanContainer;
