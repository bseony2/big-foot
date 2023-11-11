"use client"

import Script from 'next/script';
import React, { useRef, useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const initLocation = { lat: 37.340378, lng: 126.733540 }

declare global {
    interface Window {
        kakao: any;
    }
}

const KakaoMap = () => {

    return (
        <>
            <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
            <Map center={{ lat: initLocation.lat, lng: initLocation.lng }} style={{ width: '100%', height: '100%' }}>
            </Map>
        </>
    );
};

export default KakaoMap;