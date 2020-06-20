/**
 * Copyrightⓒ2020 by Moon Hanju (github.com/it-crafts)
 * All rights reserved. 무단전재 및 재배포 금지.
 * All contents cannot be copied without permission.
 */
const common = (() => {
    const IMG_PATH = 'https://devingmd.github.io/lesson/img';
    const fetchApiData = async (url, page = 'info') => {
        const res = await fetch(url + page);
        const data = await res.json();
        return data.data;
    }

    return { IMG_PATH, fetchApiData }
})();

const Root = (selector) => {
    let $el;
    let $page;

    const create = () => {
        $el = document.querySelector(selector);
        $page = ItemDetail($el);
        $page.create();
    }

    const destroy = () => {
        $page && $page.destroy();
    }

    return { $el, create, destroy }
};

const ItemDetail = ($parent) => {
    const URL = 'https://my-json-server.typicode.com/it-crafts/lesson/detail/';
    let $el;
    let $item;
    let $detail;

    const data = {};

    const create = async () => {
        render();
        $el = $parent.firstElementChild;
        const detailData = await fetch();
        $item = Item($el.firstElementChild, detailData, detailData.imgList, detailData.profile);
        $item.create();
        $detail = Detail($el.firstElementChild, detailData.detailList);
        $detail.create();
    }

    const destroy = () => {
        $item && $item.destroy();
        $detail && $detail.destroy();
        $parent.removeChild($el);
    }

    const fetch = async () => {
        const detailData = await common.fetchApiData(URL, 1);
        Object.assign(data, detailData);
        return detailData;
    }

    const render = () => {
        $parent.innerHTML = `
            <div class="_2z6nI">
                <div style="flex-direction: column;">
                </div>
                <div class="js-loading _4emnV">
                    <div class="Igw0E IwRSH YBx95 _4EzTm _9qQ0O ZUqME" style="height: 32px; width: 32px;"><svg aria-label="읽어들이는 중..." class="By4nA" viewBox="0 0 100 100"><rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47"></rect></svg></div>
                </div>
                <div class="js-more Igw0E rBNOH YBx95 ybXk5 _4EzTm soMvl" style="margin-right: 8px;">
                    <button class="sqdOP L3NKy y3zKF _4pI4F" type="button" style="margin: 16px 8px">더보기</button>
                    <button class="sqdOP L3NKy y3zKF _4pI4F" type="button" style="margin: 16px 8px">전체보기</button>
                </div>
            </div>
        `;
    };

    return { $el, create, destroy }
};

const Item = ($parent, detailData = {}, imgDataList = [], profileData = {}) => {
    let $el;

    const create = () => {
        render(detailData, imgDataList, profileData, innerWidth);
        $el = $parent.firstElementChild;
    }

    const destroy = () => {
        $parent.removeChild;
    }

    const render = (data, imgDataList, profileData, width) => {
        const imgs = imgDataList.reduce((html, img) => {
            html += /* html */`
            <li class="_-1_m6" style="opacity: 1; width: ${width}px;">
                <div class="bsGjF" style="margin-left: 0px; width: ${width}px;">
                    <div class="Igw0E IwRSH eGOV_ _4EzTm" style="width: ${width}px;">
                        <div role="button" tabindex="0" class="ZyFrc">
                            <div class="eLAPa RzuR0">
                                <div class="KL4Bh" style="padding-bottom: 100%;">
                                    <img class="FFVAD" decoding="auto" src="${common.IMG_PATH}${img}" style="object-fit: cover;">
                                </div>
                                <div class="_9AhH0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            `;
    return html;
    }, '');

    const navs = imgDataList.reduce((html, img, index) => {
        const on = index === 0 ? 'XCodT' : '';
        html += /* html */`
            <div class="Yi5aA ${on}"></div>
        `;
        return html;
    }, '');

    $parent.insertAdjacentHTML('afterbegin', /* html */`
        <article class="QBXjJ M9sTE h0YNM SgTZ1 Tgarh">
            <header class="Ppjfr UE9AK wdOqh">
                <div class="RR-M- h5uC0 mrq0Z" role="button" tabindex="0">
                    <canvas class="CfWVH" height="126" width="126" style="position: absolute; top: -5px; left: -5px; width: 42px; height: 42px;"></canvas>
                    <span class="_2dbep" role="link" tabindex="0" style="width: 32px; height: 32px;"><img alt="${profileData.name}님의 프로필 사진" class="_6q-tv" src="${common.IMG_PATH}${profileData.img}"></span>
                </div>
                <div class="o-MQd">
                    <div class="e1e1d">
                        <h2 class="BrX75"><a class="FPmhX notranslate nJAzx" title="${profileData.name}" href="javascript:;">${profileData.name}</a></h2>
                    </div>
                </div>
            </header>
            <div class="_97aPb wKWK0">
                <div class="rQDP3">
                    <div class="pR7Pc">
                        <div class="tR2pe" style="padding-bottom: 100%;"></div>
                        <div class="Igw0E IwRSH eGOV_ _4EzTm O1flK D8xaz fm1AK TxciK yiMZG">
                            <div class="tN4sQ zRsZI">
                                <div class="NgKI_">
                                    <div class="js-slider MreMs" tabindex="0" style="transition-duration: 0.25s; transform: translateX(0px);">
                                        <div class="qqm6D">
                                            <ul class="YlNGR" style="padding-left: 0px; padding-right: 0px;">
                                                ${imgs}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <button class="POSa_" tabindex="-1">
                                    <div class="coreSpriteLeftChevron"></div>
                                </button>
                                <button class="_6CZji" tabindex="-1">
                                    <div class="coreSpriteRightChevron"></div>
                                </button>
                            </div>
                        </div>
                        <div class="js-pagebar ijCUd _3eoV- IjCL9 _19dxx">
                            ${navs}
                        </div>
                    </div>
                </div>
            </div>
            <div class="eo2As">
                <section class="ltpMr Slqrh">
                    <span class="fr66n"><button class="dCJp8 afkep"><span aria-label="좋아요" class="glyphsSpriteHeart__outline__24__grey_9 u-__7"></span></button></span>
                    <span class="_15y0l"><button class="dCJp8 afkep"><span aria-label="댓글 달기" class="glyphsSpriteComment__outline__24__grey_9 u-__7"></span></button></span>
                    <span class="_5e4p"><button class="dCJp8 afkep"><span aria-label="게시물 공유" class="glyphsSpriteDirect__outline__24__grey_9 u-__7"></span></button></span>
                    <span class="wmtNn"><button class="dCJp8 afkep"><span aria-label="저장" class="glyphsSpriteSave__outline__24__grey_9 u-__7"></span></button></span>
                </section>
                <section class="EDfFK ygqzn">
                    <div class=" Igw0E IwRSH eGOV_ ybXk5 vwCYk">
                        <div class="Nm9Fw"><a class="zV_Nj" href="javascript:;">좋아요 <span>${data.clipCount}</span>개</a></div>
                    </div>
                </section>
                <div class="KlCQn EtaWk">
                    <ul class="k59kT">
                        <div role="button" class="ZyFrc">
                            <li class="gElp9" role="menuitem">
                                <div class="P9YgZ">
                                    <div class="C7I1f X7jCj">
                                        <div class="C4VMK">
                                            <h2 class="_6lAjh"><a class="FPmhX notranslate TlrDj" title="${profileData.name}" href="javascript:;">${profileData.name}</a></h2>
                                            <span>${data.text}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <li class="lnrre">
                            <button class="Z4IfV sqdOP yWX7d y3zKF" type="button">댓글 <span>${data.commentCount}</span>개 모두 보기</button>
                        </li>
                    </ul>
                </div>
                <section class="sH9wk _JgwE eJg28">
                    <div class="RxpZH"></div>
                </section>
            </div>
            <div class="MEAGs">
                <button class="dCJp8 afkep"><span aria-label="옵션 더 보기" class="glyphsSpriteMore_horizontal__outline__24__grey_9 u-__7"></span></button>
            </div>
        </article>
        `);
        }
        
        return { $el, create, destroy }
    };

const Detail = ($parent, detailDataList = []) => {
    const $elList = [];
    const dataList = [];

    const create = () => {
        addImg();
    };

    const addImg = () => {
        const detailData = detailDataList.shift();
        render(detailData);
        $elList.push($parent.lastElementChild);
        dataList.push(detailData);
        return { hasNext: detailDataList.length > 0 };
    };

    const destroy = () => {
        $elList.forEach($el => $parent.removeChild($el));
    };

    const render = (img) => {
        $parent.insertAdjacentHTML('beforeend', /*html*/`
            <article class="M9sTE h0YNM SgTZ1">
                <img style="width: 100%; height: auto;" src="${common.IMG_PATH}${img}">
            </article>
        `);
    }

    return { $elList, create, destroy }
};

const root = Root('main');
root.create();
// root.destroy();
// root.create(); 