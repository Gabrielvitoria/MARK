using System.Threading.Tasks;
using Abp.Application.Services;
using MARK.Sessions.Dto;

namespace MARK.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
