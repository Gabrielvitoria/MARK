using Microsoft.AspNetCore.Antiforgery;
using MARK.Controllers;

namespace MARK.Web.Host.Controllers
{
    public class AntiForgeryController : MARKControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
