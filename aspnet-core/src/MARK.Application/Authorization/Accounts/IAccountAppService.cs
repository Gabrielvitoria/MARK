using System.Threading.Tasks;
using Abp.Application.Services;
using MARK.Authorization.Accounts.Dto;

namespace MARK.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
