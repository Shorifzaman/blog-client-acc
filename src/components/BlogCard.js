import { formatDistanceToNowStrict } from 'date-fns';
import React from 'react';
import { MdEmojiObjects } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addHistory } from '../redux/actions/blogsActions';
import { toggleTags } from '../redux/actions/filterActions';

const BlogCard = ({ blog }) => {
    const dispatch = useDispatch();
    const { _id, date, description, img, name, tags, title, bannerimg } = blog || {};

    const time = formatDistanceToNowStrict(new Date(date))

    const fixedWordLength = (sentence, wordLen) => {
        if (sentence.split(" ").length > wordLen) {
            return `${sentence.split(" ", wordLen).join(" ")} ...`;
        };
        return sentence;
    };
    return (
        <div className="max-w-lg w-full lg:max-w-full lg:flex mx-auto">
            <div className="border w-full border-emerald-400 bg-white p-4 flex flex-col justify-between leading-normal rounded-lg">
            <div className="overflow-hidden rounded-xl h-full w-full">
        <div className="absolute text-white text-sm z-40 bg-emerald-600 font-primary px-2 py-1 rounded-lg">
          {tags}
        </div>
        <img
          className="transform hover:scale-125 transition duration-700 w-full h-full object-cover"
          src={bannerimg}
          alt={title}
        />
      </div>
                <div className="mb-8">
                    <h2 title={title} className="text-emerald-900 font-bold text-xl mb-2">{fixedWordLength(title, 5)}</h2>
                    <div className='flex items-center my-2'>
                        < MdEmojiObjects color='green' size={25}/>
                        <p className="ml-2 text-lg text-emerald-600 flex items-center">
                            {tags.map((tag, i) => <span
                                key={i}
                                className="pr-2 hover:underline capitalize font-semibold"
                            >
                                <button onClick={() => dispatch(toggleTags(tag))} >
                                    {tag}
                                </button>
                            </span>)}
                        </p>
                    </div>
                    <p title={description} className="text-emerald-700 text-base">{fixedWordLength(description, 10)}</p>
                </div>
                <div className="flex flex-row-reverse items-center justify-between">
                    <div className='flex items-center'>
                        <img className="w-10 h-10 object-cover rounded-full mr-4" src={img} alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <div>
                                <p className="text-emerald-900 leading-none">{name}</p>
                                <p className="text-emerald-600">{time} ago</p>
                            </div>
                        </div>
                    </div>
                    <Link to={`/blog/${_id}`}
                        onClick={() => dispatch(addHistory(blog))}
                    >
                        <button className='text-white bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-lg'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;