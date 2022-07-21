const navData = require('../configs/nav'),
  linkData = require('../configs/link'),
  { searchData } = require('../libs/utils');

const { getSliderData } = require('../services/Slider'),
  { getRecomCourseData } = require('../services/RecomCourse'),
  { getCollectionData } = require('../services/Collection'),
  { getStarTeacherData } = require('../services/Teacher'),
  { getCourseCategory } = require('../services/CourseTab'),
  { getCourseData } = require('../services/Course');

class Home {
  async getHomeData(ctx, next) {
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)

    const
      sliderData = await getSliderData(),
      collectionData = await Promise.all((await getCollectionData()).map(async item => item)),
      recomCourseData = await getRecomCourseData(),
      teacherData = await getStarTeacherData();

    ctx.body = {
      sliderData,
      navData,
      linkData,
      recomCourseData,
      collectionData,
      teacherData
    };
  }

  async getListData(ctx, next) {

    const
      tabData = await getCourseCategory(),
      courseData = await getCourseData();

    ctx.body = {
      tabData,
      courseData
    };
  }

  async getCourseData(ctx, next) {
    const courseData = await getCourseData();

    ctx.body = courseData;
  }
}

module.exports = new Home();