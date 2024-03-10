import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../Timeline.scss';

const Timeline = () => {
    useEffect(() => {
        const sr = ScrollReveal();

        if (window.innerWidth < 768) {
            const timelineContents = document.querySelectorAll('.timeline-content');
            timelineContents.forEach(content => {
                if (content.classList.contains('js--fadeInLeft')) {
                    content.classList.remove('js--fadeInLeft');
                    content.classList.add('js--fadeInRight');
                }
            });
            // window.sr = ScrollReveal();

            // if ($(window).width() < 768) {

            //     if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            //         $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
            //     }

            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        } else {
            sr.reveal('.js--fadeInLeft', {
                origin: 'left',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });

            sr.reveal('.js--fadeInRight', {
                origin: 'right',
                distance: '300px',
                easing: 'ease-in-out',
                duration: 800,
            });
        }

        sr.reveal('.js--fadeInLeft', {
            origin: 'left',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });

        sr.reveal('.js--fadeInRight', {
            origin: 'right',
            distance: '300px',
            easing: 'ease-in-out',
            duration: 800,
        });
    });

    return (
        <>
            <div className='row text-center mt-5'>
                <h1 className='text-light'>Professional and <span id='text'> Personal</span> experiences</h1>
            </div>
            <section className="timeline mt-5">
                <div className="container">
                    <div className="timeline-item">
                        <div className="timeline-img" />
                        <div className="timeline-content js--fadeInRight">
                            <h2 className='text-light'>Web UI Developer</h2>
                            <h4 id='text'>IXIA Solutions</h4>
                            <div className="date text-dark font-weight-bold">Mar-2024 To Present</div>
                            <p className='text-light'>
                                Html, CSS, Javascript, ReactJS, NextJs , Bootstrap, SQL.
                                <li>Design the pages for websites.</li>
                                <li>Designed websites using WordPress.</li>
                                <li>Worked on components with Vue.js.</li>
                                <li>Worked on web APIs.</li>
                                <li>Hands on software : Git, Jira.</li>
                            </p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-img" />
                        <div className="timeline-content js--fadeInLeft">
                            <h2 className='text-light'>Front-End Developer</h2>
                            <h4 id='text'>Promodome Digital</h4>
                            <div className="date text-dark font-weight-bold">Nov-2023 To Feb-2024</div>
                            <p className='text-light'>
                                Html, CSS, Javascript, Vue.js, Nuxt JS, Bootstrap, SQL, WordPress.
                                <li>Design the pages for websites.</li>
                                <li>Designed websites using WordPress.</li>
                                <li>Worked on components with Vue.js.</li>
                                <li>Worked on web APIs.</li>
                                <li>Hands on software : Git, Jira.</li>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-img" />
                        <div className="timeline-content js--fadeInRight">
                            <h2 className='text-light'>Java Full Stack Developer Apprenticeship</h2>
                            <h4 id='text'>Jspider ,Thane</h4>
                            <div className="date text-dark font-weight-bold">Jul-2023 To Nov-2023</div>
                            <p className='text-light'>
                                Java, SQL, PL/SQL, HTML5, CSS, Javascript.
                                <li>OPPS, Collection, LinkedList.</li>
                                <li>Designed websites using HTML, CSS,Javascript.</li>
                                <li>Worked on components with ReactJs.</li>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-img" />
                        <div className="timeline-content js--fadeInLeft">
                            <h2 className='text-light'>Game Event Lead</h2>
                            <h4 id='text'>Festino Bits</h4>
                            <div className="date text-dark font-weight-bold">Jul-2022 To Sep-2022</div>
                            <p className='text-light'>
                                Lead a team of 11 people for a gaming event.
                                <li>Manages and Organize Games Valorant, BGMI.</li>
                                <li>Communicate and Coordinate with players.</li>
                                <li>Personally, guide teammates.</li>
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-img" />
                        <div className="timeline-content js--fadeInRight">
                            <h2 className='text-light'>Team Lead - Research Paper Writing</h2>
                            <h4 id='text'>Cloud Risks and Prevention</h4>
                            <div className="date text-dark font-weight-bold">Jul-2021 To Sep-2021</div>
                            <p className='text-light'>
                                Lead a team of 4 people for this research paper.
                                <li>Did research on existing research papers. </li>
                                <li>Avoid plagiarism by using various tools and by checking the content twice.</li>
                                <li>Make sure to include every teammate's opinion and research in the paper.</li>
                            </p>
                        </div>
                    </div>


                </div>
            </section>

        </>
    );
};

export default Timeline;
