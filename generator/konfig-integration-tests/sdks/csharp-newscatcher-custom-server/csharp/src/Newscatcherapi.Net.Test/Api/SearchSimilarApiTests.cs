/*
 * NewsCatcher-V3 Production API
 *
 * <img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>
 *
 * The version of the OpenAPI document: 3.2.16
 * Contact: maksym@newscatcherapi.com
 * Generated by: https://konfigthis.com
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Api;
using Newscatcherapi.Net.Model;

namespace Newscatcherapi.Net.Test.Api
{
    /// <summary>
    ///  Class for testing SearchSimilarApi
    /// </summary>
    public class SearchSimilarApiTests : IDisposable
    {
        private NewscatcherClient client;

        public SearchSimilarApiTests()
        {
            client = new NewscatcherClient();
            client.SetBasePath("http://127.0.0.1:4088");
            // Configure API key authorization: apiKey
            client.SetApiKey("YOUR_API_KEY");

        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test Get
        /// </summary>
        [Fact]
        public void GetTest()
        {
            var q = "q_example";
            var searchIn = "title_content";
            var includeSimilarDocuments = false;
            var similarDocumentsNumber = 5;
            var similarDocumentsFields = "title,content";
            var publishedDatePrecision = "publishedDatePrecision_example";
            var sortBy = "relevancy";
            var nerName = "nerName_example";

            try
            {
                // [Get] Search For Similar Articles Request
                List<Object> result = client.SearchSimilar.GetAll(new Dictionary<string, object> { { "q", q }, { "searchIn", searchIn }, { "includeSimilarDocuments", includeSimilarDocuments }, { "similarDocumentsNumber", similarDocumentsNumber }, { "similarDocumentsFields", similarDocumentsFields }, { "publishedDatePrecision", publishedDatePrecision }, { "sortBy", sortBy }, { "nerName", nerName } });
                Console.WriteLine(result);
                Assert.Equal(result.Count, 6);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SearchSimilarApi.Get: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
                Assert.True(false, "Exception when calling SearchSimilarApi.Get: " + e.Message);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
                Assert.True(false, "Exception when calling SearchSimilarApi.Get: " + e.Message);
            }
        }

        /// <summary>
        /// Test Post
        /// </summary>
        [Fact]
        public void PostTest()
        {
            var q = "q_example";
            var searchIn = "title_content";
            var includeSimilarDocuments = false;
            var similarDocumentsNumber = 5;
            var similarDocumentsFields = "title,content";
            var publishedDatePrecision = "publishedDatePrecision_example";
            var sortBy = "relevancy";
            var nerName = "nerName_example";

            var moreLikeThisRequest = new MoreLikeThisRequest(
                q: q,
                searchIn: searchIn,
                includeSimilarDocuments: includeSimilarDocuments,
                similarDocumentsNumber: similarDocumentsNumber,
                similarDocumentsFields: similarDocumentsFields,
                publishedDatePrecision: publishedDatePrecision,
                sortBy: sortBy,
                nerName: nerName
            );
            
            try
            {
                // [Post] Search For Similar Articles Request
                List<Object> result = client.SearchSimilar.PostAll(moreLikeThisRequest);
                Console.WriteLine(result);
                Assert.Equal(result.Count, 6);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SearchSimilarApi.Post: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
                Assert.True(false, "Exception when calling SearchSimilarApi.Post: " + e.Message);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
                Assert.True(false, "Exception when calling SearchSimilarApi.Post: " + e.Message);
            }
        }
    }
}