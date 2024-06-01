import React from 'react';
import SportsNews from './NewsCard/SportsNews';
import SidebarCard from './NewsCard/SidebarCard';
import useNewsByCategory from '../../hooks/useNewsByCategory';
import SkeletonLoader from '../../components/Utilites/SkeletonLoader';

const EduSportsEconomy = () => {

    const { data: datas, loader: loaders } = useNewsByCategory('tenntuliya');
    const { data, loader } = useNewsByCategory('boda');
    const { data:debi, loader:dbLoader } = useNewsByCategory('debeegnj');
    const { data:atoyaree, loader:atoyareeLoader } = useNewsByCategory('atoyaree');
    const { data:pncgrsdr, loader:pgLoader } = useNewsByCategory('pncgr-sdr');
    const { data:onnano, loader:onnaoLoader } = useNewsByCategory('onzanz-sngbad');


    if (loader || loaders||dbLoader||atoyareeLoader||pgLoader||onnaoLoader) {
        return <SkeletonLoader />
    }

    return (
       <>
            <div className='row w-100 mx-auto my-1 '>
                <SidebarCard data={datas} tittle={'তেঁতুলিয়া'} />
                <SidebarCard data={data} tittle={'বোদা'} />
                <SportsNews   data={pncgrsdr} tittle={'পঞ্চগড় সদর'}/>
            </div>
            <div className='row w-100 mx-auto my-1 '>
                <SidebarCard data={debi} tittle={'দেবীগঞ্জ'} />
                <SidebarCard data={atoyaree} tittle={'আটোয়ারী'} />
                <SportsNews   data={onnano} tittle={'অন্যান্য সংবাদ	'}/>
            </div>
       </>
    );
};

export default EduSportsEconomy;