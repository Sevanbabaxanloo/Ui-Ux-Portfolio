import Header from "../Header";
import Footer from "../Footer";

const styles = {
  ProjectListContainer:
    "flex flex-col items-center my-[90px] gap-[50px] max-md:w-full ",
  ProjectListHeading: "flex flex-col gap-[12px] max-md:items-center",
  ProjectListHeadingP: "text-[#525252] text-[15px] font-[500]",
  ProjectListHeadingH2:
    "text-[#FEFFFF] text-[36px] font-[600] max-md:text-[32px]",
  ProjectListSecondContainer:
    "w-[75.208vw] flex flex-col items-center gap-[12px] max-xs:gap-[50px] p-[33px] max-mb:px-[33px] max-xs:px-[14px] max-lg:w-full",
  ProjectListSecondContainerInerDiv:
    "flex flex-col gap-[50px] mb-[36px] max-s:w-full",
  ProjectListSecondContainerInerDivTitleDiv: "flex flex-col gap-[12px]",
  ProjectListSecondContainerInerDivTitleDivP:
    "text-[#525252] font-montserrat font-[500] text-[15px] leading-[18px] text-center max-xs:text-[15px]",
  ProjectListSecondContainerInerDivTitleDivH1:
    "text-[#ffffff] font-[600] text-[36px] leading-[43px] text-center max-xs:text-[32px]",
  ProjectListSecondContainerInfoDiv: "flex gap-[9px] max-xs:flex-wrap",
  ProjectListSecondContainerInfoDivText:
    "h-[33px] py-[6px] px-[16px] text-[#FEFFFF] font-[400] text-center rounded-[69px] shadow-custom max-md:text-[13px] max-md:h-auto",
  ProjectListDescriptionContainer:
    "flex flex-row justify-center gap-[9px] w-fit flex-wrap max-md:grid max-md:grid-cols-3 max-md:gap-[9px] max-sm:grid-cols-2",
  ProjectListDescription:
    "text-[#FEFFFF] text-[14px] font-[400] bg-[#0f0f0f] rounded-[69px] shadow-custom px-[16px] py-[8px] max-md:text-center max-xs:text-[3.7vw]",
  ProjectListProjectContainer:
    "w-[781px] flex flex-col items-center gap-[24px] max-md:w-full",
  ProjectListProjectImage:
    "w-[733px] h-[662px] bg-no-repeat bg-cover bg-center rounded-[24px] max-md:w-full max-md:h-[590px] max-md:h-fit",
  ProjectListProjectInfo: "mt-[50px]",
  ProjectListProjectInfoSection: "mt-[24px]",
  ProjectListProjectInfoSectionH1:
    "font-montserrat font-[600] text-[36px] text-[#FEFFFF] text-center max-md:text-[2rem] max-xs:text-[32px]",
  ProjectListProjectInfoSectionP:
    "font-montserrat font-[400] text-[20px] text-[#DCDCDC] text-center mt-[24px] max-md:text-[18px] max-xs:text-[1rem]",
  ProjectListGridContainerMain:
    "p-[33px] max-mb:px-[33px] max-xs:px-[14px]",
  ProjectListGridContainerDiscriptionDiv:
    "flex flex-col gap-[24px] mb-[50px] w-[77.78vw] max-mb:w-auto max-sb:items-center",
  ProjectListGridContainerDiscriptionH1:
    "text-[36px] text-[#feffff] leading-[43px] font-[600] max-xs:text-[32px]",
  ProjectListGridContainerDiscriptionP:
    "text-[22px] text-[#6E2FEB] leading-[26px] font-[700] mb-[50px] max-xs:text-[18px]",
  ProjectListGridContainer:
    "grid justify-center grid-cols-4 grid-rows-2 gap-x-[25px] gap-y-[59px] w-[1120px] mb-[120px] max-sb:grid-cols-2 max-sb:grid-rows-4 max-xs:grid-cols-1 max-xs:grid-rows-8 max-sb:gap-y-[7.68vw] max-mb:w-full max-xs:flex max-xs:flex-col max-xs:gap-y-4",
  ProjectListGridChild1:
    "bg-[#1A1A1A] rounded-[13.8px] row-span-2 w-[266px] h-[572px] px-[23px] pt-[23px] max-mb:w-full",
  ProjectListGridChild1ColorDiv:
    "w-[220px] h-[404px] rounded-[13.8px] bg-[#FF6201] max-mb:w-[18vw] max-sb:w-full",
  ProjectListGridChild1TextDiv: "pt-[52px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild1Text1:
    "font-[300] text-[18px] leading-[21px] text-[#ffffffde]",
  ProjectListGridChild1Text2:
    "font-[500] text-[18px] leading-[21px] text-[#ffffffde]",
  ProjectListGridChild2:
    "bg-[#1A1A1A] rounded-[13.8px] w-[265px] h-[253px] px-[17px] pt-[17px] max-mb:w-full",
  ProjectListGridChild2ColorDiv:
    "w-[230px] h-[134px] rounded-[13.8px] bg-[#c4c8cc] max-mb:w-[18vw] max-sb:w-full",
  ProjectListGridChild2TextDiv: "pt-[17px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild3:
    "bg-[#1A1A1A] rounded-[13.8px] row-span-2 w-[263px] h-[572px] px-[14px] py-[23px] max-xxl:w-full max-xs:h-fit",
  ProjectListGridChild3LogoTextDiv:
    "pt-[107px] flex flex-col items-start gap-[6px] max-mb:w-[265px] max-xs:pt-0 max-xs:pb-[50px] max-sb:w-full",
  ProjectListGridChild4:
    " bg-[#1A1A1A] rounded-[13.8px] w-[233px] h-[256px]  px-[17px] pt-[17px] flex flex-col items-start max-mb:w-[20vw] max-mb:w-full",
  ProjectListGridChild4LogoTextDiv:
    "flex flex-col items-start gap-[6px] pl-[17px]",
  ProjectListGridChild5:
    " bg-[#1A1A1A] rounded-[13.8px] w-[265px] h-[256px] px-[17px] pt-[17px] max-mb:w-[22vw] max-mb:w-full",
  ProjectListGridChild5ColorDiv:
    "w-[230px] h-[134px] rounded-[13.8px] bg-[#ffffff] max-mb:w-[18vw] max-sb:w-full",
  ProjectListGridChild5TextDiv: "pt-[17px] flex flex-col items-start gap-[6px]",
  ProjectListGridChild6:
    " bg-[#1A1A1A] rounded-[13.8px] w-[233px] h-[256px]  px-[17px] pt-[17px] flex flex-col items-start max-mb:w-[20vw] max-mb:w-full",
  ProjectListGridChild6TextDiv: "flex flex-col items-start gap-[6px] pl-[17px]",
  ProjectListChartTitleMain: "w-[1175px] mb-[120px] max-xxl:w-full",
  ProjectListChartTitle: "font-[700] text-[22px] text-[#6e2feb] leading-[26px]",
  ProjectListChartTitleH2Div: "mb-[50px] text-center",
  ProjectListChartPMain: "flex gap-[22px]",
  ProjectListChartPDiv: "flex flex-col gap-[10px]",
  ProjectListChartDivParagraph: "flex flex-col items-start gap-[10px]",
  ProjectListUserAnalysisChildContainer:
    "flex gap-[24px] justify-center max-mb:flex-wrap p-[33px] max-mb:px-[33px] max-xs:px-[14px]",
  ProjectListUserAnalysisChilds:
    "w-[375px] h-[573px] bg-[#1a1a1a] px-[32px] py-[27px] rounded-[20.8px] max-xl:w-[29.297vw] max-lg:w-[375px] max-sm:w-[300px] max-sm:h-[520px]",
  ProjectListUserAnalysisChildOneDiv: "flex justify-center pb-[42px]",
  ProjectListUserAnalysisChildText:
    "font-[700] text-[15px] text-[#ffffffde] leading-[23px]",
  ProjectListUserAnalysisChildTextTwo:
    "font-[300] text-[14.5px] text-[#ffffffde] leading-[23px]",
  ScopeMainDiv: "px-[33px] max-mb:px-[33px] max-xs:px-[14px]",
  ScopeMainContainer:
    "w-[1234px] mb-[120px] max-xxl:w-full max-xxl:flex max-xxl:flex-col max-xxl:items-center",
  ScopeMainContainerFirstDiv: "mb-[100px]",
  ScopeMainContainerSecondDivContainer:
    "flex flex-col gap-[80px] max-ss:gap-[50px]",
  ScopeMainContainerCardDiv:
    "flex justify-end gap-[40px] max-xxl:flex-wrap max-xxl:justify-center max-md:gap-[5vw]",
  ScopeMainCardDiv:
    "w-[267px] h-[250px] bg-[#1a1a1a] rounded-[30px] max-md:h-fit max-ss:w-full",
  ScopeMainCardImgOne:
    "absolute w-[60px] top-[-20px] left-[-20px] max-md:w-[64px] max-ss:w-[55px] max-ss:top-[-15px] max-ss:left-[-12px]",
  ScopeMainPDiv: "p-[32px] flex flex-col gap-[18px]",
  ScopeMainDivPar:
    "font-[600] text-[20px] text-[#ffffff] leading-[20px] tracking-[-0.25px] text-left",
  ScopeMainDivParTwo:
    "font-[400] text-[15px] text-[#ffffff] leading-[24px] tracking-[-0.25px] text-left",
  ScopeMainCardImgTwo:
    "absolute w-[60px] top-[-25px] left-[-20px] max-md:w-[64px] max-ss:w-[55px] max-ss:top-[-15px] max-ss:left-[-12px]",
  ScopeMainCardImgThree:
    "absolute w-[60px] top-[-27px] left-[-28px] max-md:w-[64px] max-ss:w-[55px] max-ss:top-[-15px] max-ss:left-[-12px]",
  ScopeMainCardImgFore:
    "absolute w-[60px] top-[-30px] left-[-28px] max-md:w-[64px] max-ss:w-[52px] max-ss:top-[-20px] max-ss:left-[-20px]",
  ScopeMainCardMainDiv: "flex flex-col items-center",
  ScopeMainCardDivLastCart:
    "py-[20px] pr-[17px] pl-[31px] w-[608px] h-[176px] bg-[#1a1a1a] rounded-[30px] flex gap-[11px] max-ss:w-[90vw] max-ss:h-fit max-ss:pl-[18px]",
  ScopeMainLastCartImg: "w-[210px] h-[64px]",
  ScopeMainLastCartSecondDiv: "flex flex-col gap-[11px]",
  ScopeMainLastCartSecondDivP:
    "font-[400] text-[18px] text-[#ffffff] leading-[20px] tracking-[-0.25px] text-left max-md:w-full",
  ScopeMainLastCartSecondDivPSpan:
    "font-[700] text-[18px] text-[#ffffff] leading-[20px] tracking-[-0.25px]",
  ScopeMainLastCartSecondDivLastP:
    "font-[400] text-[17px] text-[#ffffff] leading-[24px] tracking-[-0.25px] text-left max-ss:text-[15px]",
  UserPersonMainDiv:
    "w-[1130px] flex flex-col items-center gap-[57px] max-mb:w-full max-ss:px-[14px] max-ss:gap-[35px]",
  UserPersonMainDivP: "text-[22px] text-[#6E2FEB] leading-[26px] font-[700]",
  UserPersonSecondDiv:
    "mb-[17px] flex gap-[27px] max-lg:gap-[16px] max-mb:flex-col max-ss:w-full",
  UserPersonContainerDiv: "flex flex-col justify-between gap-[16px] h-full",
  UserPersonContainerDivTwo:
    "bg-[#1a1a1a] flex gap-[43px] items-center justify-center w-[360px] h-[154px] mx-auto rounded-[20px] max-mb:w-full max-mb:m-0 max-lg:pr-[3.9vw] max-lg:pl-[3.9vw] max-lg:gap-[2.5vw] max-ss:m-0 max-ss:gap-[43px] max-xs:px-[18px]",
  UserPersonContainerDivTwoImg: "w-[120px] h-[112px]",
  UserPersonContainerDivTwoH1:
    "text-[32px] text-[#ffffff] leading-[38px] font-[300] text-start max-lg:text-[28px]",
  UserPersonCartMainDiv:
    "bg-[#1a1a1a] flex flex-col justify-start gap-[21px] items-center w-[360px] h-[354px] row-span-2 mx-auto rounded-[20px] pt-[68px] pb-[33px] pl-[40px] pr-[75px] max-mb:w-full max-mb:h-fit max-mb:m-0 max-lg:pl-[3.9vw] max-lg:pt-[6vw] max-lg:pb-[3.2vw] max-lg:pr-[3.9vw] max-lg:gap-[2vw] max-ss:m-0 max-ss:h-fit max-xs:p-[18px]",
  UserPersonCartMainSecondDiv:
    "flex gap-[3px] w-full max-mb:w-[239px] max-mb:justify-start",
  UserPersonCartFirstCart: "flex flex-row",
  UserPersonCartFirstCartImg: "mr-[5px]",
  UserPersonCartFirstCartP:
    "text-[24px] text-[#ffffff] font-[700] leading-[28px] text-start max-lg:text-[20px]",
  UserPersonCartSecondCartMainDiv:
    "flex flex-col gap-[12px] max-ss:w-full max-ss:items-center",
  UserPersonCartSecondCartMainInerDiv:
    "flex flex-col gap-[15px] max-ss:justify-center",
  UserPersonCartSecondCart: "flex gap-[11px] leading-[20px]",
  UserPersonCartSecondCartImg: "w-[15px] h-[20px]",
  UserPersonCartSecondCartP:
    "text-[14px] text-[#ffffff] font-[300] leading-[20px] max-lg:text-[14px] text-start",
  UserPersonCartTheredCartMainDiv: "flex flex-col gap-[16px] max-lg:gap-[16px]",
  UserPersonCartTheredCartContainerDiv:
    "bg-[#1a1a1a] flex items-center justify-center col-span-2 w-[741px] h-[80px] mx-auto rounded-[20px] max-mb:w-[65vw] max-ss:m-0 max-ss:w-full",
  UserPersonCartTheredCartP:
    "text-[16px] text-[#ffffff] font-[300] leading-[22px] text-center max-ss:px-[10px] max-xs:p-[18px]",
  UserPersonCartForthCartMainDiv:
    "flex justify-between max-ss:gap-[16px] max-xs:flex-col",
  UserPersonCartForthCartDiv:
    "bg-[#1a1a1a] flex flex-col gap-[20px] items-start w-[354px] h-[197px] row-span-2 rounded-[20px] pt-[28px] pb-[31px] pl-[26px] pr-[40px] max-lg:gap-[2vw] max-lg:pb-[3vw] max-lg:pt-[2.7vw] max-lg:pl-[2.5vw] max-lg:pr-[3.9vw] max-mb:w-[31vw] max-ss:w-full max-xs:h-fit max-xs:p-[18px]",
  UserPersonCartForthDiv: "flex gap-[9.5px] w-full",
  UserPersonCartForthDivP:
    "text-[24px] text-[#ffffff] font-[700] leading-[28px] max-lg:text-[20px]",
  UserPersonCartForthDivPSevond:
    "text-[14px] text-[#ffffff] font-[300] leading-[22px] max-lg:text-[14px]",
  UserPersonCartFifthDivMain:
    "bg-[#1a1a1a] flex flex-col gap-[20px] items-center w-[360px] h-[197px] row-span-2 rounded-[20px] pt-[27px] pb-[52px] pl-[26px] pr-[32px] max-lg:gap-[2vw] max-mb:w-[31.8vw] max-lg:pb-[3vw] max-lg:pt-[2.7vw] max-lg:pl-[2.5vw] max-lg:pr-[3.9vw] max-ss:w-full max-xs:h-fit max-xs:p-[18px]",
  UserPersonCartFifthDiv: "text-start w-full",
  UserPersonCartFifthDivP:
    "text-[24px] text-[#ffffff] font-[700] leading-[28px] max-lg:text-[20px]",
  UserPersonCartFifthDivPar:
    "text-[14px] text-[#ffffff] font-[300] leading-[22px] text-start max-lg:text-[14px]",
  UserPersonCartSixthDivMain:
    "bg-[#1a1a1a] flex flex-col gap-[20px] items-center w-[741px] h-[224px] mx-auto rounded-[20px] pt-[39px] pb-[53px] pl-[32px] pr-[44px] max-mb:w-[65vw] max-lg:pb-[3vw] max-lg:pt-[2.7vw] max-lg:pl-[2.5vw] max-lg:pr-[3.9vw] max-ss:m-0 max-ss:w-full max-xs:h-fit max-xs:p-[18px]",
  LastTextH2:
    "text-[22px] text-[#6E2FEB] text-center leading-[26px] font-[700] mb-[50px]",
};

const Futurest = () => {
  return (
    <>
      <Header />
      <div>
        <div className={styles.ProjectListContainer}>
          <div className={styles.ProjectListSecondContainer}>
            <div className={styles.ProjectListSecondContainerInerDiv}>
              <div className={styles.ProjectListSecondContainerInerDivTitleDiv}>
                <p className={styles.ProjectListSecondContainerInerDivTitleDivP}>About Project</p>
                <h1 className={styles.ProjectListSecondContainerInerDivTitleDivH1}>Futurest</h1>
              </div>
              <div className={styles.ProjectListSecondContainerInfoDiv}>
                <div><p className={styles.ProjectListSecondContainerInfoDivText}>Social platform</p></div>
                <div><p className={styles.ProjectListSecondContainerInfoDivText}>App</p></div>
                <div><p className={styles.ProjectListSecondContainerInfoDivText}>Events</p></div>
                <div><p className={styles.ProjectListSecondContainerInfoDivText}>View</p></div>
              </div>
            </div>
            <div className={styles.ProjectListProjectContainer}>
              <div className={styles.ProjectListProjectImage}>
                <img src="/Assets/futurest-img/iPhone13Pro.png" alt="" />
              </div>
              <div className={styles.ProjectListProjectInfo}>
                <div>
                  <h1 className={styles.ProjectListProjectInfoSectionH1}>Futurest Vision</h1>
                  <p className={styles.ProjectListProjectInfoSectionP}>
                    To give everyone the opportunity to create meaningful in-person connections.
                  </p>
                </div>
                <div className={styles.ProjectListProjectInfoSection}>
                  <h1 className={styles.ProjectListProjectInfoSectionH1}>Futurest Mission</h1>
                  <p className={styles.ProjectListProjectInfoSectionP}>
                    Our mission is to fight loneliness and mistrust among people by giving them
                    the opportunity to connect in local communities.
                  </p>
                </div>
                <div className={styles.ProjectListProjectInfoSection}>
                  <h1 className={styles.ProjectListProjectInfoSectionH1}>Futurest Values</h1>
                  <p className={styles.ProjectListProjectInfoSectionP}>
                    Life is Real — we want to create a safe place where people would not be
                    afraid to show their real identities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ProjectListGridContainerMain}>
          <div className="w-full flex flex-col items-center">
            <div className={styles.ProjectListGridContainerDiscriptionDiv}>
            <h2 className={styles.ProjectListGridContainerDiscriptionH1}>Style guide</h2>
            <p className={styles.ProjectListGridContainerDiscriptionP}>Color Palette/Typefaces</p>
          </div>
          <div className={styles.ProjectListGridContainer}>
            <div className={styles.ProjectListGridChild1}>
              <div className={styles.ProjectListGridChild1ColorDiv}></div>
              <div className={styles.ProjectListGridChild1TextDiv}>
                <p className={styles.ProjectListGridChild1Text1}>#FF6201</p>
                <p className={styles.ProjectListGridChild1Text2}>Solid orange</p>
              </div>
            </div>
            <div className={styles.ProjectListGridChild2}>
              <div className={styles.ProjectListGridChild2ColorDiv}></div>
              <div className={styles.ProjectListGridChild2TextDiv}>
                <p className={styles.ProjectListGridChild1Text1}>#C4C8CC</p>
                <p className={styles.ProjectListGridChild1Text2}>Solid grey</p>
              </div>
            </div>
            <div className={styles.ProjectListGridChild3}>
              <div>
                <img src="/Assets/futurest-img/a-futurest.png" alt="logo" className="w-[245px] h-[312px]" />
              </div>
              <div className={styles.ProjectListGridChild3LogoTextDiv}>
                <p className={styles.ProjectListGridChild1Text1}>SF Pro Display</p>
                <p className={styles.ProjectListGridChild1Text2}>Regular</p>
              </div>
            </div>
            <div className={styles.ProjectListGridChild4}>
              <div>
                <img src="/Assets/futurest-img/a-futurest.png" alt="logo" className="w-[168px] h-[172px] max-xxl:w-[150px]" />
              </div>
              <div className={styles.ProjectListGridChild4LogoTextDiv}>
                <p className={styles.ProjectListGridChild1Text1}>SF Pro Display</p>
                <p className={styles.ProjectListGridChild1Text2}>Medium</p>
              </div>
            </div>
            <div className={styles.ProjectListGridChild5}>
              <div className={styles.ProjectListGridChild5ColorDiv}></div>
              <div className={styles.ProjectListGridChild5TextDiv}>
                <p className={styles.ProjectListGridChild1Text1}>#FFFFFF</p>
                <p className={styles.ProjectListGridChild1Text2}>Solid white</p>
              </div>
            </div>
            <div className={styles.ProjectListGridChild6}>
              <div>
                <img src="/Assets/futurest-img/a-futurest.png" alt="logo" className="w-[168px] h-[172px] max-xxl:w-[150px]" />
              </div>
              <div className={styles.ProjectListGridChild6TextDiv}>
                <p className={styles.ProjectListGridChild1Text1}>SF Pro Display</p>
                <p className={styles.ProjectListGridChild1Text2}>Bold</p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.ProjectListChartTitleMain}>
          <div className={styles.ProjectListChartTitleH2Div}>
            <h2 className={styles.ProjectListChartTitle}>User analysis</h2>
          </div>
          <div className={styles.ProjectListUserAnalysisChildContainer}>
            <div className={styles.ProjectListUserAnalysisChilds}>
              <div className={styles.ProjectListUserAnalysisChildOneDiv}>
                <p className={styles.ProjectListUserAnalysisChildText}>How often do you want to meet friends offline?</p>
              </div>
              <div><img src="/Assets/futurest-img/chartone.png" alt="chartlogo" /></div>
              <div className={styles.ProjectListChartPMain}>
                <div className={styles.ProjectListChartPDiv}>
                  <p className={styles.ProjectListUserAnalysisChildText}>5%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>45%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>30%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>20%</p>
                </div>
                <div className={styles.ProjectListChartDivParagraph}>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Every day</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Once a week</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Twise a week</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>I like online entertainments</p>
                </div>
              </div>
            </div>
            <div className={styles.ProjectListUserAnalysisChilds}>
              <div className={styles.ProjectListUserAnalysisChildOneDiv}>
                <p className={styles.ProjectListUserAnalysisChildText}>Moving to the new city how you find friends with same interests?</p>
              </div>
              <div><img src="/Assets/futurest-img/charttwo.png" alt="chartlogo" /></div>
              <div className={styles.ProjectListChartPMain}>
                <div className={styles.ProjectListChartPDiv}>
                  <p className={styles.ProjectListUserAnalysisChildText}>40%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>20%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>40%</p>
                </div>
                <div className={styles.ProjectListChartDivParagraph}>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>In university/work</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>I have my online friends</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>In social platforms</p>
                </div>
              </div>
            </div>
            <div className={styles.ProjectListUserAnalysisChilds}>
              <div className={styles.ProjectListUserAnalysisChildOneDiv}>
                <p className={styles.ProjectListUserAnalysisChildText}>What kind of entertaiments do you prefer?</p>
              </div>
              <div><img src="/Assets/futurest-img/chartthree.png" alt="chartlogo" /></div>
              <div className={styles.ProjectListChartPMain}>
                <div className={styles.ProjectListChartPDiv}>
                  <p className={styles.ProjectListUserAnalysisChildText}>20%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>40%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>15%</p>
                  <p className={styles.ProjectListUserAnalysisChildText}>25%</p>
                </div>
                <div className={styles.ProjectListChartDivParagraph}>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Online games</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Board games</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Sport</p>
                  <p className={styles.ProjectListUserAnalysisChildTextTwo}>Parties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ScopeMainDiv}>
          <div className={styles.ScopeMainContainer}>
            <div className={styles.ScopeMainContainerFirstDiv}>
              <p className={styles.ProjectListChartTitle}>The scope of our work</p>
            </div>
            <div className={styles.ScopeMainContainerSecondDivContainer}>
              <div className={styles.ScopeMainContainerCardDiv}>
                <div className={styles.ScopeMainCardDiv}>
                  <div className="relative">
                    <img src="/Assets/futurest-img/Rocket.png" alt="rocket" className={styles.ScopeMainCardImgOne} />
                  </div>
                  <div className={styles.ScopeMainPDiv}>
                    <p className={styles.ScopeMainDivPar}>Research</p>
                    <p className={styles.ScopeMainDivParTwo}>We conducted competitors analysis, determined the main user personas, goals, and jobs.</p>
                  </div>
                </div>
                <div className={styles.ScopeMainCardDiv}>
                  <div className="relative">
                    <img src="/Assets/futurest-img/dart.png" alt="dart" className={styles.ScopeMainCardImgTwo} />
                  </div>
                  <div className={styles.ScopeMainPDiv}>
                    <p className={styles.ScopeMainDivPar}>UX Design</p>
                    <p className={styles.ScopeMainDivParTwo}>We provided the main prototypes of future screens and a user flow.</p>
                  </div>
                </div>
                <div className={styles.ScopeMainCardDiv}>
                  <div className="relative">
                    <img src="/Assets/futurest-img/paint.png" alt="paint" className={styles.ScopeMainCardImgThree} />
                  </div>
                  <div className={styles.ScopeMainPDiv}>
                    <p className={styles.ScopeMainDivPar}>UI Design</p>
                    <p className={styles.ScopeMainDivParTwo}>We started drawing and working out all the application details.</p>
                  </div>
                </div>
                <div className={styles.ScopeMainCardDiv}>
                  <div className="relative">
                    <img src="/Assets/futurest-img/phone.png" alt="phone" className={styles.ScopeMainCardImgFore} />
                  </div>
                  <div className={styles.ScopeMainPDiv}>
                    <p className={styles.ScopeMainDivPar}>User Testing</p>
                    <p className={styles.ScopeMainDivParTwo}>With high-fidelity mockups ready, we did a second round of testing with users.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.ScopeMainCardMainDiv}>
                  <div className={styles.ScopeMainCardDivLastCart}>
                    <div className={styles.ScopeMainLastCartImg}>
                      <img src="/Assets/futurest-img/figma.png" alt="figma" className="w-[64px]" />
                    </div>
                    <div className={styles.ScopeMainLastCartSecondDiv}>
                      <p className={styles.ScopeMainLastCartSecondDivP}>
                        Our tool of choice <span className={styles.ScopeMainLastCartSecondDivPSpan}>Figma</span>
                      </p>
                      <p className={styles.ScopeMainLastCartSecondDivLastP}>
                        Figma let us organize the whole process very effectively and keep all the files in one place.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.UserPersonMainDiv}>
          <div>
            <h2 className={styles.UserPersonMainDivP}>User Personas</h2>
          </div>
          <div className={styles.UserPersonSecondDiv}>
            <div>
              <div className={styles.UserPersonContainerDiv}>
                <div className={styles.UserPersonContainerDivTwo}>
                  <div>
                    <img src="/Assets/futurest-img/alex.png" alt="alex" className={styles.UserPersonContainerDivTwoImg} />
                  </div>
                  <div>
                    <h1 className={styles.UserPersonContainerDivTwoH1}>Alex <br /> Piskov</h1>
                  </div>
                </div>
                <div className={styles.UserPersonCartMainDiv}>
                  <div className={styles.UserPersonCartMainSecondDiv}>
                    <div className={styles.UserPersonCartFirstCart}>
                      <img src="/Assets/futurest-img/star.png" alt="star" className={styles.UserPersonCartFirstCartImg} />
                      <p className={styles.UserPersonCartFirstCartP}>Demographics</p>
                    </div>
                  </div>
                  <div className={styles.UserPersonCartSecondCartMainDiv}>
                    <div className={styles.UserPersonCartSecondCartMainInerDiv}>
                      {["Age: 16 years old", "Education: High School", "Hometown: Moscow, Russia", "Living: Prague, Czech Republic", "Family: Single", "Occupation: Student"].map((text, i) => (
                        <div key={i} className="flex gap-[11px]">
                          <img src="/Assets/futurest-img/rocketship.png" alt="rocketship" className="w-[15px] h-[20px]" />
                          <p className={styles.UserPersonCartSecondCartP}>{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.UserPersonCartTheredCartMainDiv}>
                <div className={styles.UserPersonCartTheredCartContainerDiv}>
                  <p className={styles.UserPersonCartTheredCartP}>"I want to hangout with my friends but they prefer online activities"</p>
                </div>
                <div className={styles.UserPersonCartForthCartMainDiv}>
                  <div className={styles.UserPersonCartForthCartDiv}>
                    <div className={styles.UserPersonCartForthDiv}>
                      <p className={styles.UserPersonCartForthDivP}>📌 Goals</p>
                    </div>
                    <div className="text-start">
                      <p className={styles.UserPersonCartForthDivPSevond}>👍 To gain admission into High School</p>
                      <p className={styles.UserPersonCartForthDivPSevond}>👍 To spend time playing outdoor games</p>
                      <p className={styles.UserPersonCartForthDivPSevond}>👍 Find people with same interests</p>
                    </div>
                  </div>
                  <div className={styles.UserPersonCartFifthDivMain}>
                    <div className={styles.UserPersonCartFifthDiv}>
                      <p className={styles.UserPersonCartFifthDivP}>😡 Fustrations</p>
                    </div>
                    <div>
                      <p className={styles.UserPersonCartFifthDivPar}>👍 He is forced to be online as most of his friends loves online activities.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.UserPersonCartSixthDivMain}>
                  <div className="w-full text-start">
                    <p className={styles.UserPersonCartFifthDivP}>🎉 Brief story</p>
                  </div>
                  <div className="w-full text-start">
                    <p className={styles.UserPersonCartFifthDivPar}>
                      John is currently seeking to gain admission to High college. He prefers offline activities such as tennis, camping, hiking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.UserPersonSecondDiv}>
            <div>
              <div className={styles.UserPersonContainerDiv}>
                <div className={styles.UserPersonContainerDivTwo}>
                  <div>
                    <img src="/Assets/futurest-img/kseniya.png" alt="Kseniya" className={styles.UserPersonContainerDivTwoImg} />
                  </div>
                  <div>
                    <h1 className={styles.UserPersonContainerDivTwoH1}>Kseniya <br /> Ilyenko</h1>
                  </div>
                </div>
                <div className={styles.UserPersonCartMainDiv}>
                  <div className={styles.UserPersonCartMainSecondDiv}>
                    <div className={styles.UserPersonCartFirstCart}>
                      <img src="/Assets/futurest-img/star.png" alt="star" className={styles.UserPersonCartFirstCartImg} />
                      <p className={styles.UserPersonCartFirstCartP}>Demographics</p>
                    </div>
                  </div>
                  <div className={styles.UserPersonCartSecondCartMainDiv}>
                    <div className={styles.UserPersonCartSecondCartMainInerDiv}>
                      {["Age: 23 years old", "Education: Master degree", "Hometown: Krasnodar, Russia", "Living: Prague, Czech Republic", "Family: Single", "Occupation: Worker"].map((text, i) => (
                        <div key={i} className="flex gap-[11px]">
                          <img src="/Assets/futurest-img/rocketship.png" alt="rocketship" className="w-[15px] h-[20px]" />
                          <p className={styles.UserPersonCartSecondCartP}>{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.UserPersonCartTheredCartMainDiv}>
                <div className={styles.UserPersonCartTheredCartContainerDiv}>
                  <p className={styles.UserPersonCartTheredCartP}>"Somtime after work i want to hang out with new people that have same interests"</p>
                </div>
                <div className={styles.UserPersonCartForthCartMainDiv}>
                  <div className={styles.UserPersonCartForthCartDiv}>
                    <div className={styles.UserPersonCartForthDiv}>
                      <p className={styles.UserPersonCartForthDivP}>📌 Goals</p>
                    </div>
                    <div className="text-start">
                      <p className={styles.UserPersonCartForthDivPSevond}>👍 Make new friends in real life</p>
                      <p className={styles.UserPersonCartForthDivPSevond}>👍 Enjoy youthful age</p>
                      <p className={styles.UserPersonCartForthDivPSevond}>👍 Spend time with his friends</p>
                    </div>
                  </div>
                  <div className={styles.UserPersonCartFifthDivMain}>
                    <div className={styles.UserPersonCartFifthDiv}>
                      <p className={styles.UserPersonCartFifthDivP}>😡 Fustrations</p>
                    </div>
                    <div>
                      <p className={styles.UserPersonCartFifthDivPar}>👍 Social media has been a huge distraction and her fear is becoming addicted.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.UserPersonCartSixthDivMain}>
                  <div className="w-full text-start">
                    <p className={styles.UserPersonCartFifthDivP}>🎉 Brief story</p>
                  </div>
                  <div className="w-full text-start">
                    <p className={styles.UserPersonCartFifthDivPar}>
                      Kseniya is currently working in an IT company. She moved to Prague 2 years ago and is looking for people to play table games and bicycle rides.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[120px]">
            <div><h2 className={styles.LastTextH2}>Design pages</h2></div>
            <div><img src="/Assets/futurest-img/mobiles.png" alt="mobiles" className="w-full h-full" /></div>
          </div>
          <div className="mt-[120px]">
            <div><h2 className={styles.LastTextH2}>Wireframing</h2></div>
            <div><img src="/Assets/futurest-img/moblilegroup.png" alt="mobiles" className="w-full h-full" /></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Futurest;