/**
 * Copyrightⓒ2020 by Moon Hanju (github.com/it-crafts)
 * All rights reserved. 무단전재 및 재배포 금지.
 * All contents cannot be copied without permission.
 */
(async () => {

    const common = (() => {
        const IMG_PATH = 'https://devingmd.github.io/lesson/img';
        const fetchApiData = async (url, page = 'info') => {
            const res = await fetch(url + page);
            const data = await res.json();
            return data.data;
        }
    
        return { IMG_PATH, fetchApiData }
    })();
    
    const root = (() => {
        let $el;
    
        const create = () => {
            $el = document.querySelector('main');
        }
    
        create();
        return { $el }
    })();
    
    const timeline = await (async ($parent) => {
        let $el;
        const url = 'https://my-json-server.typicode.com/it-crafts/lesson/timeline/';
        const infoData = await common.fetchApiData(url);
        const totalPage = infoData.totalPage * 1;
        const profileData = infoData.profile;
    
        const create = () => {
            render();
            $el = $parent.firstElementChild;
        }
    
        const render = () => {
            $parent.innerHTML = `
                <div class="v9tJq">
                    <div class="fx7hk">
                        <a class="_9VEo1 T-jvg" href="javascript:;" data-type="grid"><span aria-label="게시물" class="glyphsSpritePhoto_grid__outline__24__grey_5 u-__7"></span></a>
                        <a class="_9VEo1" href="javascript:;" data-type="feed"><span aria-label="피드" class="glyphsSpritePhoto_list__outline__24__blue_5 u-__7"></span></a>
                        <a class="_9VEo1" href="javascript:;" data-type=""><span aria-label="태그됨" class="glyphsSpriteTag_up__outline__24__grey_5 u-__7"></span></a>
                    </div>
                </div>
            `;
        }
    
        create();
        return { $el, totalPage, profileData, url }
    })(root.$el);
    
    const timelineProfile = (($parent, profileData) => {
        let $el;
    
        const create = () => {
            render(profileData);
            $el = $parent.firstElementChild;
        }
    
        const scaleDown = numstring => {
            const num = numstring.replace(/,/g, '');
            if(num >= 1000000) {
                return Math.floor(num / 100000) / 10 + '백만'
            }
            if(num >= 1000) {
                return Math.floor(num / 100) / 10 + '천'
            }
            return num;
        };
    
        const render = (data) => {
            $parent.insertAdjacentHTML('afterbegin', `
                <div>
                    <header class="HVbuG">
                        <div class="XjzKX">
                            <div class="RR-M- h5uC0" role="button" tabindex="0">
                                <canvas class="CfWVH" height="91" width="91" style="position: absolute; top: -7px; left: -7px; width: 91px; height: 91px;"></canvas>
                                <span class="_2dbep" role="link" tabindex="0" style="width: 77px; height: 77px;"><img alt="${data.name}님의 프로필 사진" class="_6q-tv" src="${common.IMG_PATH}${data.img}"></span>
                            </div>
                        </div>
                        <section class="zwlfE">
                            <div class="nZSzR">
                                <h1 class="_7UhW9 fKFbl yUEEX KV-D4 fDxYl">${data.name}</h1>
                                <span class="mrEK_ Szr5J coreSpriteVerifiedBadge" title="인증됨">인증됨</span>
                                <div class="AFWDX"><button class="dCJp8 afkep"><span aria-label="옵션" class="glyphsSpriteMore_horizontal__outline__24__grey_9 u-__7"></span></button></div>
                            </div>
                            <div class="Y2E37">
                                <div class="Igw0E IwRSH eGOV_ vwCYk">
                                    <span class="ffKix bqE32">
                                        <span class="vBF20 _1OSdk"><button class="_5f5mN jIbKX _6VtSN yZn4P">팔로우</button></span>
                                        <span class="mLCHD _1OSdk"><button class="_5f5mN jIbKX KUBKM yZn4P"><div class="OfoBO"><div class="_5fEvj coreSpriteDropdownArrowWhite"></div></div></button></span>
                                    </span>
                                </div>
                            </div>
                        </section>
                    </header>
                    <div class="-vDIg">
                        <h1 class="rhpdm">${data.title}</h1><br><span>${data.text}</span>
                    </div>
                    <ul class="_3dEHb">
                        <li class="LH36I"><span class="_81NM2">게시물 <span class="g47SY lOXF2">${data.post}</span></span></li>
                        <li class="LH36I"><a class="_81NM2" href="javascript:;">팔로워 <span class="g47SY lOXF2" title="${data.follower}">${scaleDown(data.follower)}</span></a></li>
                        <li class="LH36I"><a class="_81NM2" href="javascript:;">팔로우 <span class="g47SY lOXF2">${data.follow}</span></a></li>
                    </ul>
                </div>
            `);
        }
    
        create();
        return { $el }
    })(timeline.$el, timeline.profileData);
    
    const timelineContent = await (async ($parent, url, profileData) => {
        let $el;

        let page = 1;
        const list = await common.fetchApiData(url, page++);

        const create = () => {
            render();
            $el = $parent.lastElementChild;
        }
    
        const render = () => {
            $parent.insertAdjacentHTML('beforeend', `
                <div class="_2z6nI">
                    <div style="flex-direction: column;">
                    </div>
                    <div style="display: none;" class="_4emnV">
                        <div class="Igw0E IwRSH YBx95 _4EzTm _9qQ0O ZUqME" style="height: 32px; width: 32px;"><svg aria-label="읽어들이는 중..." class="By4nA" viewBox="0 0 100 100"><rect fill="#555555" height="6" opacity="0" rx="3" ry="3" transform="rotate(-90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.08333333333333333" rx="3" ry="3" transform="rotate(-60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.16666666666666666" rx="3" ry="3" transform="rotate(-30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.25" rx="3" ry="3" transform="rotate(0 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.3333333333333333" rx="3" ry="3" transform="rotate(30 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.4166666666666667" rx="3" ry="3" transform="rotate(60 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5" rx="3" ry="3" transform="rotate(90 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.5833333333333334" rx="3" ry="3" transform="rotate(120 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.6666666666666666" rx="3" ry="3" transform="rotate(150 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.75" rx="3" ry="3" transform="rotate(180 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.8333333333333334" rx="3" ry="3" transform="rotate(210 50 50)" width="25" x="72" y="47"></rect><rect fill="#555555" height="6" opacity="0.9166666666666666" rx="3" ry="3" transform="rotate(240 50 50)" width="25" x="72" y="47"></rect></svg></div>
                    </div>
                    <div class="Igw0E rBNOH YBx95 ybXk5 _4EzTm soMvl" style="margin-right: 8px; display: none;">
                        <button class="sqdOP L3NKy y3zKF _4pI4F" type="button" style="margin: 16px 8px">더보기</button>
                        <button class="sqdOP L3NKy y3zKF _4pI4F" type="button" style="margin: 16px 8px">전체보기</button>
                    </div>
                </div>
            `);
        }
    
        create();
        return { $el, list, profileData }
    })(timeline.$el, timeline.url, timeline.profileData);
    

    timelineContent.list.forEach(data => {
        const feedItem = (($parent, profileData, data) => {
            let $el;

            const create = () => {
                render(data);
                $el = $parent.lastElementChild;
            }

            const render = (data) => {
                $parent.insertAdjacentHTML('beforeend', `
                <article id="feed" class="M9sTE h0YNM SgTZ1">
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
                    <div class="_97aPb">
                        <div role="button" tabindex="0" class="ZyFrc">
                            <div class="eLAPa kPFhm">
                                <div class="KL4Bh" style="padding-bottom: 100%;"><img class="FFVAD" alt="${data.name}" src="${common.IMG_PATH}${data.img}" style="object-fit: cover;"></div>
                                <div class="_9AhH0"></div>
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
    
            create();
            return { $el }
        })(timelineContent.$el.firstElementChild, timelineContent.profileData, data);   
    });
    })();