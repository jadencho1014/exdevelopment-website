import Image from "next/image";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">In-App Features</h2>
            <p className="text-xl text-gray-400">
              Boost your productivity and take multitasking to the next level.
            </p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                src="/images/notes 1.png"
                alt="Notes"
                width={60}
                height={60}
              />
              <br />
              <h4 className="h4 mb-2">Notes</h4>
              <p className="text-lg text-gray-400 text-center">
                Take notes with your apple pencil and save them to the app, or
                on your device as a PDF.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                src="/images/web2 1.png"
                alt="Web"
                width={60}
                height={60}
              />
              <br />
              <h4 className="h4 mb-2">Web Browser</h4>
              <p className="text-lg text-gray-400 text-center">
                Search the web using your favorite search engine. File download
                and upload is supported with seamless integration with the Files
                app.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                src="/images/Untitled 34.png"
                alt="Calculator"
                width={60}
                height={60}
              />
              <br />
              <h4 className="h4 mb-2">Calculator</h4>
              <p className="text-lg text-gray-400 text-center">
                A calculator app brought to the iPad that supports scientific
                and arithmetic operations.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                src="/images/Files 1.png"
                alt="Files"
                width={60}
                height={60}
              />
              <br />
              <h4 className="h4 mb-2">Files</h4>
              <p className="text-lg text-gray-400 text-center">
                Manage, upload, and download files from your device. Drag and
                drop between other apps and infiniteX2P is supported.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                src="/images/lookup 1.png"
                alt="Lookup"
                width={60}
                height={60}
              />
              <br />
              <h4 className="h4 mb-2">Lookup</h4>
              <p className="text-lg text-gray-400 text-center">
                View your files from the Files app. Annotate PDF files, display
                AR models in 3D, and more.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <Image
                src="/images/textedit2 1.png"
                alt="TextEdit"
                width={60}
                height={60}
              />
              <br />
              <h4 className="h4 mb-2">Text Edit</h4>
              <p className="text-lg text-gray-400 text-center">
                In-app text editor that allows you to read from and write to
                .txt files with a friendly interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
