using Abp.Authorization;
using MARK.Authorization.Roles;
using MARK.Authorization.Users;

namespace MARK.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
