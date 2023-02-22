import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import loadBlogsData from '../../redux/thunk/blogs/fetchBlogs';

const Blog = () => {
    const blogs = useSelector(state => state.blog.blogs);

    const dispatch = useDispatch();

    const { blogId } = useParams();

    useEffect(() => {
        dispatch(loadBlogsData());
    }, [dispatch]);


    const blog = blogs.find(blog => blog._id === blogId);
    const { date, description, img, name, tags, title, bannerimg } = blog || {};

    return (
        <div className="px-5 mt-2">
            <div className="max-w-7xl mx-auto border border-emerald-400 bg-white flex flex-col justify-between leading-normal rounded-lg">
                <div className='sm:flex justify-around'>
                    <div className='p-5 mx-5'>

                    <div className="col-span-5 lg:w-4/2 space-y-5 lg:px-6 my-8 px-2 border-x-emerald-900">

                    <img
                    src={bannerimg}
                    alt={title}
                    className="w-full lg:w-full lg:h-[70vh] h-[200px]"
                    />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between pt-3 md:space-y-0 space-y-2 border border-transparent text-sm font-medium rounded-md text-emerald-600 px-6 border-r-indigo-500 border-l-indigo-500">
                    <div className='dark:text-dark_text font-bold'>Authored by {name}</div>
                        <div className='dark:text-dark_text'>Publish On : {format(new Date(date), "PPpp")}
                        </div>
                    <img class="w-20 h-20 rounded-full" src={img} alt="Rounded avatar" />

                    </div>


                    <div className="text-emerald-900 font-bold text-2xl pt-2">{title}</div>
                        <div className='flex items-center my-2'>
                            < MdEmojiObjects />
                            <p className="ml-2 text-sm uppercase text-emerald-600 flex items-center">
                                {tags && tags.map((tag, i) => <span
                                    key={i}
                                    className="pr-2 hover:underline"
                                >
                                    <a href={`https://www.google.com/search?q=${tag}`} target="blank">{tag}</a>
                                </span>)}
                            </p>
                        </div>
                        <p className="text-emerald-700 text-base">{description}</p>
                    </div>
                    {/* <div className="text-sm flex flex-col items-center justify-center min-w-max mt-12 sm:mt-0 border-l border-emerald-400 p-5">
                        <div className="mb-5">
                            <div className="mr-2 grid place-content-center overflow-hidden">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Avatar of Jonathan Reinink" />
                            </div>
                            <div className='text-center mt-4'>
                                <p className="text-emerald-600">Author</p>
                                <p className="text-emerald-900 text-xl font-semibold">{name}</p>
                                <p className="text-emerald-600">Publish On : {format(new Date(date), "PPpp")}</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Blog;