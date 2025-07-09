import React from 'react';

function V() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#e1eefe] py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Why should I host my site on a Windows shared hosting?
      </h1>
      <p className="max-w-2xl text-lg text-gray-700 text-justify leading-relaxed mb-4">
        When figuring the best plan for your business, you have 2 major server
        options: Linux and Windows hosting. Window hosting is one of the best
        options there. Though it isn’t suitable for everyone’s goals (for many of
        the new businesses launching themselves online, choosing a shared hosting
        based on Linux remains the obvious choice owing to affordability and
        reliability). But it provides unique advantages for businesses for which
        it is suitable i.e. Window hosting makes sense for large businesses
        looking to expand their website.
      </p>
      <ul className="max-w-2xl text-lg text-gray-700 list-disc pl-8 mb-4 text-left">
        <li>It operates on Windows Operating System</li>
        <li>It supports ASP.NET, MSSQL, and other Microsoft technologies</li>
        <li>It offers a user-friendly Plesk Control Panel</li>
      </ul>
      <p className="max-w-2xl text-lg text-gray-700 text-justify leading-relaxed mb-4">
        If your business depends more on Windows, then choosing{' '}
        <a
          href="https://www.siteworx.in/shared-hosting"
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Windows shared hosting
        </a>{' '}
        can be the best choice. The reason we say this is that the server will
        work smoothly with other programs you will be using. This also means that
        you won’t need to build anything from scratch. But before finalizing your
        decision, understand what your IT team thinks about choosing Windows
        shared hosting as the server. It is important to bring them into this
        discussion and let their opinion help you in choosing your web hosting
        requirement.
      </p>
    </div>
  );
}

export default V;
