import React from 'react';

//Component
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import Cluster from '../../components/Cluster';
import Node from '../../components/Node';
import Filler from '../../components/Filler';
import FillerProduct from '../../components/FillerProduct';
import Post from '../../components/Post';

function Home(){
    return(
        <React.Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                <section className="page">
                    <Post>
                        <Banner ID={552}>
                            <Button 
                                text="LOREM IPSUM" 
                                root="banner"
                            />
                        </Banner>
                    </Post>
                    <Post>
                        <Cluster type='two-to-one'>
                            <Node
                                size="big"
                                position="left" 
                                theme="light"
                                ID={681}
                            />
                            <Node 
                                size="small"
                                position="top-right"
                                theme="light"
                                ID={11}
                            />
                            <Node 
                                size="small"
                                position="bottom-halfed-left"
                                theme="light"
                                ID={12023452}
                            />
                            <Node 
                                size="small"
                                position="bottom-halfed-right"
                                theme="light"
                                ID={404} 
                            />
                        </Cluster>
                        <Filler
                            title="recomendam"
                            text="nossos especialistas"
                        >
                            <FillerProduct productCount={3} />
                            <FillerProduct productCount={3} />
                        </Filler>
                    </Post>
                    <Post title="Blog">
                        <Button
                            root="post" 
                            target="blog"
                            text="Veja todos os posts"
                        />
                    </Post>
                    <Post title="Namah Shop">
                        <Button
                            root="post" 
                            target="store"
                            text="Veja todos os produtos"
                        />
                    </Post>
                    <Post title="Courses">                
                        <Button
                            root="post" 
                            target="courses"
                            text="Veja todos os cursos"
                        />
                    </Post>
                    <Post title="Podcasts">               
                        <Button
                            root="post" 
                            target="podcasts"
                            text="Veja todos os podcasts"
                        />
                    </Post>
                    <Post title="@namah.concept">
                    </Post>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Home;