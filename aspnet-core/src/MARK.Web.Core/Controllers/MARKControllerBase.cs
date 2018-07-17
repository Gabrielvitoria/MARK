using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace MARK.Controllers
{
    public abstract class MARKControllerBase: AbpController
    {
        protected MARKControllerBase()
        {
            LocalizationSourceName = MARKConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
