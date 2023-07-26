interface Img {
  name: string;
  linkedIn?: string;
  git: string;
  medium?: string;
}

const ImgComponent = ({ name, linkedIn, git, medium }: Img) => {
  return (
    <section>
      <img
        src="/placeholder.png"
        alt="image"
        className="w-[400px] h-[300px] rounded-xl"
      />
      <h1 className="font-glb text-3xl mt-3">{name}</h1>
      <h3 className="flex flex-row gap-2 mb-5">
        <a href={git}>
          <svg
            enable-background="new 0 0 32 32"
            height="32px"
            className="h-5 w-5"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              clip-rule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fill="#181616"
              fill-rule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </a>
        <a href={linkedIn}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
          </svg>
        </a>
        <a href={medium}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <g>
              <path d="M511.2,256C511.2,115.155 396.851,0.806 256.006,0.806L255.994,0.806C115.149,0.806 0.8,115.155 0.8,256C0.8,396.845 115.149,511.194 255.994,511.194L256.006,511.194C396.851,511.194 511.2,396.845 511.2,256ZM281.624,256.002C281.624,318.733 231.116,369.586 168.814,369.586C106.512,369.586 56,318.721 56,256.002C56,193.282 106.508,142.414 168.814,142.414C231.12,142.414 281.624,193.271 281.624,256.002ZM405.381,256.002C405.381,315.05 380.126,362.936 348.974,362.936C317.821,362.936 292.567,315.05 292.567,256.002C292.567,196.954 317.817,149.067 348.97,149.067C380.123,149.067 405.377,196.939 405.377,256.002L405.381,256.002ZM456,256.002C456,308.894 447.119,351.798 436.162,351.798C425.204,351.798 416.327,308.906 416.327,256.002C416.327,203.098 425.207,160.206 436.162,160.206C447.116,160.206 456,203.094 456,256.002Z" />
            </g>
          </svg>
        </a>
      </h3>
    </section>
  );
};

const MentorComp = ({ name, linkedIn, git, medium }: Img) => {
  return (
    <section className="flex flex-col justify-center items-center mb-10">
      <img
        src="/placeholderSqr.jpg"
        alt="image"
        className="rounded-full grow max-w-60 max-h-60 max-sm:w-40 max-sm:h-40"
      />
      <h1 className="font-glb text-2xl mt-3">{name}</h1>
      <h3 className="flex flex-row gap-2 mb-5">
        <a href={git}>
          <svg
            enable-background="new 0 0 32 32"
            height="32px"
            className="h-5 w-5"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              clip-rule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fill="#181616"
              fill-rule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </a>
        <a href={linkedIn}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
          </svg>
        </a>
        <a href={medium}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <g>
              <path d="M511.2,256C511.2,115.155 396.851,0.806 256.006,0.806L255.994,0.806C115.149,0.806 0.8,115.155 0.8,256C0.8,396.845 115.149,511.194 255.994,511.194L256.006,511.194C396.851,511.194 511.2,396.845 511.2,256ZM281.624,256.002C281.624,318.733 231.116,369.586 168.814,369.586C106.512,369.586 56,318.721 56,256.002C56,193.282 106.508,142.414 168.814,142.414C231.12,142.414 281.624,193.271 281.624,256.002ZM405.381,256.002C405.381,315.05 380.126,362.936 348.974,362.936C317.821,362.936 292.567,315.05 292.567,256.002C292.567,196.954 317.817,149.067 348.97,149.067C380.123,149.067 405.377,196.939 405.377,256.002L405.381,256.002ZM456,256.002C456,308.894 447.119,351.798 436.162,351.798C425.204,351.798 416.327,308.906 416.327,256.002C416.327,203.098 425.207,160.206 436.162,160.206C447.116,160.206 456,203.094 456,256.002Z" />
            </g>
          </svg>
        </a>
      </h3>
    </section>
  );
};

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center mx-4">
      <h1 className="font-glb text-7xl my-20 max-sm:text-[2.90rem] max-sm:my-10">
        MEET THE TEAM
      </h1>

      <section className="flex flex-col justify-center items-center">
        <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 ">PRESIDENT</h1>
        <ImgComponent
          name="Rahul M Navneeth"
          git="www.github.com"
          linkedIn="www.linkedin.com"
          medium="www.google.com"
        />
      </section>

      <section className="flex flex-col justify-center items-center py-14 max-sm:mt-5 w-full ">
        <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 mt-3">
          BOARD MEMBERS
        </h1>
        <section className="flex flex-row gap-4 flex-wrap justify-around">
          <ImgComponent
            name="Bharath"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
          <ImgComponent
            name="Naveen"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
          <ImgComponent
            name="Ashwath"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
          <ImgComponent
            name="Albert Richard"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
        </section>
      </section>

      <section className="flex flex-col justify-center items-center py-14 max-sm:mt-5 w-full ">
        <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 mt-3">
          MEDIA HEAD
        </h1>
        <section className="flex flex-row gap-4 flex-wrap justify-around">
          <ImgComponent
            name="Srivatsav"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
          <ImgComponent
            name="Sriram"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
        </section>
      </section>

      <section className="flex flex-col justify-center items-center max-sm:mt-5  md:px-24  2xl:px-60 ">
        <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 mt-3">MEMBERS</h1>
        <section className="flex flex-row gap-4 flex-wrap justify-around">
          <MentorComp name="Mukesh Kannan MK" git="www.google.com" />
          <MentorComp name="Ravi Prasath" git="www.google.com" />
          <MentorComp name="Elon" git="www.google.com" />
          <MentorComp name="Mark" git="www.google.com" />
          <MentorComp name="Bill" git="www.google.com" />
          <MentorComp name="Tim" git="www.google.com" />
          <MentorComp name="Jeff" git="www.google.com" />
        </section>
      </section>
    </main>
  );
}
