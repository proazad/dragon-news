import moment from "moment";
import author from "../../assets/Ellipse 1.png";
import {BsBookmark,BsShare, BsFillEyeFill,BsFillStarFill} from "react-icons/bs"
import thumbnail from "../../assets/mobile.png"
import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <div className="lg:col-span-2 px-2 lg:px-0">
      <h2 className="text-xl font-semibold text-gray-700">Dragon News Home</h2>

      <div className="my-5 border rounded-md">
        <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="flex gap-5">
            <img src={author} className="w-12 rounded-full" alt="Author" />
            <div>
                <h3 className="text-base font-semibold text-gray-700">Awlad Hossain</h3>
                <h5 className="text-sm font-normal text-gray-600">{moment().format('YYYY-MM-DD')}</h5>
            </div>
          </div>
          <div className="flex gap-5 text-xl">
            <BsBookmark></BsBookmark>
            <BsShare></BsShare>
          </div>
        </div>
        <div className="px-5 my-5">
            <h2 className="text-xl font-bold text-gray-700">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
        </div>
        <div className="p-5">
            <img src={thumbnail} className="rounded-md" alt="" />
        </div>
        <div className="p-5">
            <p className="text-base font-normal">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <Link to="/" className="text-warning font-semibold hover:underline">Read More</Link></p>
        </div>
        <div className="p-5">
            <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex gap-1 text-xl">
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <span className="text-gray-500 ml-2">4.99</span>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-600">
                    <BsFillEyeFill></BsFillEyeFill>
                    <span>499</span>
                </div>
            </div>
        </div>
      </div>

      <div className="my-5 border rounded-md">
        <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="flex gap-5">
            <img src={author} className="w-12 rounded-full" alt="Author" />
            <div>
                <h3 className="text-base font-semibold text-gray-700">Awlad Hossain</h3>
                <h5 className="text-sm font-normal text-gray-600">{moment().format('YYYY-MM-DD')}</h5>
            </div>
          </div>
          <div className="flex gap-5 text-xl">
            <BsBookmark></BsBookmark>
            <BsShare></BsShare>
          </div>
        </div>
        <div className="px-5 my-5">
            <h2 className="text-xl font-bold text-gray-700">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
        </div>
        <div className="p-5">
            <img src={thumbnail} className="rounded-md" alt="" />
        </div>
        <div className="p-5">
            <p className="text-base font-normal">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <Link to="/" className="text-warning font-semibold hover:underline">Read More</Link></p>
        </div>
        <div className="p-5">
            <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex gap-1 text-xl">
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <span className="text-gray-500 ml-2">4.99</span>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-600">
                    <BsFillEyeFill></BsFillEyeFill>
                    <span>499</span>
                </div>
            </div>
        </div>
      </div>

      <div className="my-5 border rounded-md">
        <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="flex gap-5">
            <img src={author} className="w-12 rounded-full" alt="Author" />
            <div>
                <h3 className="text-base font-semibold text-gray-700">Awlad Hossain</h3>
                <h5 className="text-sm font-normal text-gray-600">{moment().format('YYYY-MM-DD')}</h5>
            </div>
          </div>
          <div className="flex gap-5 text-xl">
            <BsBookmark></BsBookmark>
            <BsShare></BsShare>
          </div>
        </div>
        <div className="px-5 my-5">
            <h2 className="text-xl font-bold text-gray-700">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
        </div>
        <div className="p-5">
            <img src={thumbnail} className="rounded-md" alt="" />
        </div>
        <div className="p-5">
            <p className="text-base font-normal">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <Link to="/" className="text-warning font-semibold hover:underline">Read More</Link></p>
        </div>
        <div className="p-5">
            <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex gap-1 text-xl">
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <span className="text-gray-500 ml-2">4.99</span>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-600">
                    <BsFillEyeFill></BsFillEyeFill>
                    <span>499</span>
                </div>
            </div>
        </div>
      </div>

      <div className="my-5 border rounded-md">
        <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="flex gap-5">
            <img src={author} className="w-12 rounded-full" alt="Author" />
            <div>
                <h3 className="text-base font-semibold text-gray-700">Awlad Hossain</h3>
                <h5 className="text-sm font-normal text-gray-600">{moment().format('YYYY-MM-DD')}</h5>
            </div>
          </div>
          <div className="flex gap-5 text-xl">
            <BsBookmark></BsBookmark>
            <BsShare></BsShare>
          </div>
        </div>
        <div className="px-5 my-5">
            <h2 className="text-xl font-bold text-gray-700">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
        </div>
        <div className="p-5">
            <img src={thumbnail} className="rounded-md" alt="" />
        </div>
        <div className="p-5">
            <p className="text-base font-normal">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <Link to="/" className="text-warning font-semibold hover:underline">Read More</Link></p>
        </div>
        <div className="p-5">
            <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex gap-1 text-xl">
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <span className="text-gray-500 ml-2">4.99</span>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-600">
                    <BsFillEyeFill></BsFillEyeFill>
                    <span>499</span>
                </div>
            </div>
        </div>
      </div>

      <div className="my-5 border rounded-md">
        <div className="bg-gray-200 px-5 py-4 flex justify-between items-center">
          <div className="flex gap-5">
            <img src={author} className="w-12 rounded-full" alt="Author" />
            <div>
                <h3 className="text-base font-semibold text-gray-700">Awlad Hossain</h3>
                <h5 className="text-sm font-normal text-gray-600">{moment().format('YYYY-MM-DD')}</h5>
            </div>
          </div>
          <div className="flex gap-5 text-xl">
            <BsBookmark></BsBookmark>
            <BsShare></BsShare>
          </div>
        </div>
        <div className="px-5 my-5">
            <h2 className="text-xl font-bold text-gray-700">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
        </div>
        <div className="p-5">
            <img src={thumbnail} className="rounded-md" alt="" />
        </div>
        <div className="p-5">
            <p className="text-base font-normal">Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <Link to="/" className="text-warning font-semibold hover:underline">Read More</Link></p>
        </div>
        <div className="p-5">
            <div className="border-t pt-4 flex justify-between items-center">
                <div className="flex gap-1 text-xl">
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <BsFillStarFill/>
                    <span className="text-gray-500 ml-2">4.99</span>
                </div>
                <div className="flex items-center gap-2 text-xl text-gray-600">
                    <BsFillEyeFill></BsFillEyeFill>
                    <span>499</span>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default MainContent;
