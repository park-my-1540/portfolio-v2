import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";

import { viewState } from "@/jotai/viewAtom";
import { useSetAtom } from "jotai";

import Box from "@/components/layouts/Box/Box";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./locomotive-scroll.css";

import Header from "@/components/organisms/Header/Header";
import { MatterBox } from "@/components/layouts/MatterBox/MatterBox";
import MainPage from "@/components/pages/MainPage";
import AboutPage from "@/components/pages/AboutPage";

gsap.registerPlugin(ScrollTrigger);

const ScrollBox: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // LocomotiveScroll 초기화
    const locoScroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    
    // ScrollTrigger와 LocomotiveScroll 동기화
    locoScroll.on("scroll", ScrollTrigger.update);


    /**
     * ScrollTrigger가 Locomotive Scroll와 동기화되록 설정하기 위해 사용하는 scrollerProxy 메서드를 설정
     * 이 설정은 Locomotive Scroll이 스크롤 위치를 "가로채는" 상황에서 ScrollTrigger가 정확히 작동하도록 도움
     */
    ScrollTrigger.scrollerProxy(containerRef.current, {

      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: containerRef.current.style.transform ? "transform" : "fixed",
    });

    // 애니메이션 설정
    gsap.from(".line-1", {
      scrollTrigger: {
        trigger: ".line-1",
        scroller: containerRef.current,
        scrub: true,
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => console.log(self.direction),
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });

    gsap.from(".line-2", {
      scrollTrigger: {
        trigger: ".orange",
        scroller: containerRef.current,
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%",
      },
      scaleX: 0,
      transformOrigin: "left center",
      ease: "none",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple", //애니메이션 시작되는 요소타겟
        scroller: containerRef.current, // locomotive scroll
        scrub: true, // 숫자일때 지연시간 설정 가능
        pin: true, // 스크롤하는동안 고정할지 여부
        start: "top top",
        end: "+=100%",
      },
    });

    tl.from(".purple p", {
      scale: 0.3,
      rotation: 45,
      autoAlpha: 0,
      ease: "power2",
    })
      .from(
        ".line-3",
        { scaleX: 0, transformOrigin: "left center", ease: "none" },
        0
      )
      .to(".purple", { backgroundColor: "#28a92b" }, 0);

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sia", // 애니메이션 시작되는 요소 타겟
          scroller: containerRef.current, // Locomotive scroll
          scrub: true, // 숫자일 때 지연 시간 설정 가능
          start: "top top",
          end: "top top+=10%", // 애니메이션이 끝나는 요소를 기준으로 거리 설정
        },
      });
      

    tl2.fromTo(
      ".test",
      { y: 1000 }, // 시작 위치를 아래에서 시작
      {
        y: 0, // 스크롤 시 위치가 위로 올라옴
        autoAlpha: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sia",
          scroller: containerRef.current,
          scrub: true,
          start: "top bottom",
          end: "top top",
        }
      }
    );

    // ScrollTrigger와 LocomotiveScroll 업데이트
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    return () => {
      // 클린업
      locoScroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
    };
  }, []);

  return (
    <>
      <div className="smooth-scroll" ref={containerRef}>
        <Header/>
        <div className="panel blue">
          <MainPage/>
        </div>

        <section className="panel orange">
          <AboutPage/>
        </section>

        {/* <section className="panel red">
          <p>
            <span className="line line-1"></span>
            <Box display="flex">
              <AboutPage/>
              <div className="test" style={{width: "500px"}}>
              이미지 전문가 , 나는 그 성능을 보증합니다. 전환율 향상 및 인지도 향상 이라는 매우 구체적인 목표를 충족합니다 .<br/><br/> 내 고객은 주로 이벤트, 문화 (음악가, 음반사 등) , 패션 (스타일링) 및 예술 공예 분야에서 활동하고 있습니다 . 나는 고객과 특권적이고 직접적인 관계를 유지합니다. 경청, 신뢰 및 장수에 도움이 되는 관계.
              각 전문가는 개인화된 접근 방식을 받습니다 .<br/><br/> 우리는 함께 문<br/><br/>제와 요구 사항을 정의합니다. 그런 다음 자원 전략을<br/><br/> 정의하는 강점과 약점에 대한 감사를 수행합니다.<br/><br/><br/> 전체적인 시각적 일관성의 일부인 혁신적인 사용자 경험을 디자인하는 것이 나에게는 최우선 과제입니다.
              내가 좋아하는 디자인은 미니멀하고 , 효과적이며 , 차분하고 , 섬세하며 , 특히 타이포그래피 에 대한 애정이 담겨 있습니다 .<br/><br/> 귀하의 신원을 유지하면서 귀하의 활동, 이미지 변화를 지원합니다. 디지털 아트 디렉션, UI-UX 등 다양한 분야의
              광고 지원 사로 도 활동하고 있습니다 .
              </div>

            </Box>
          </p>
        </section> */}

        {/* <section className="panel purple">
          <p>
            <span className="line line-3"></span>This panel gets pinned in a
            similar way, and has a more involved animation that's wrapped in a
            timeline, fading the background color and animating the transforms
            of the paragraph in addition to the line, all synced with the scroll
            position perfectly.
          </p>
        </section> */}

        <section className="panel gray">DONE!</section>
      </div>
    </>
  );
};

export default ScrollBox;
