import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">환영합니다, EcoMission에!</h2>
        <p className="text-xl mb-8">
          우리는 지구를 보호하기 위한 여정에 함께합니다. 당신의 작은 실천이 큰 변화를 만듭니다.
        </p>
        <Link to="/missions" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg">
          미션 참여하기
        </Link>
      </div>

      {/* 특징 섹션 */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h3 className="text-2xl font-semibold mb-4">지속 가능성</h3>
          <p>환경을 위한 실천적 방법을 제공하여 지속 가능한 미래를 만들어갑니다.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h3 className="text-2xl font-semibold mb-4">커뮤니티 참여</h3>
          <p>같은 목표를 가진 사람들과 함께 성장하고 배우며 변화를 이끕니다.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h3 className="text-2xl font-semibold mb-4">교육</h3>
          <p>환경 보호에 대한 인식을 높이고, 지식을 나누어 더 나은 세상을 만듭니다.</p>
        </div>
      </div>

      {/* 이미지 갤러리 */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">미션 갤러리</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/path/to/image1.jpg" alt="미션 이미지 1" className="rounded shadow-lg"/>
          <img src="/path/to/image2.jpg" alt="미션 이미지 2" className="rounded shadow-lg"/>
          <img src="/path/to/image3.jpg" alt="미션 이미지 3" className="rounded shadow-lg"/>
          {/* 추가 이미지 및 설명을 넣을 수 있습니다. */}
        </div>
      </div>

      {/* 최신 뉴스 또는 블로그 포스트 */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">최신 소식</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="p-6 shadow-lg rounded-lg bg-white">
            <h4 className="font-semibold text-lg mb-2">환경 보호를 위한 5가지 실천 방법</h4>
            <p className="mb-4">지구를 위한 작은 실천이 모여 큰 변화를 만듭니다. 일상에서 쉽게 실천할 수 있는 방법들을 알아봅시다.</p>
            <Link to="/news/1" className="text-green-600 hover:text-green-500 font-semibold">더 보기</Link>
          </article>
          <article className="p-6 shadow-lg rounded-lg bg-white">
            <h4 className="font-semibold text-lg mb-2">커뮤니티 미션 성공 사례</h4>
            <p className="mb-4">우리 커뮤니티가 함께 달성한 놀라운 미션 성공 사례들을 공유합니다.</p>
            <Link to="/news/2" className="text-green-600 hover:text-green-500 font-semibold">더 보기</Link>
          </article>
          {/* 추가 기사 및 링크를 넣을 수 있습니다. */}
        </div>
      </div>
    </div>
  );
}

export default Home;
