using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using MARK.Configuration;
using MARK.Web;

namespace MARK.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class MARKDbContextFactory : IDesignTimeDbContextFactory<MARKDbContext>
    {
        public MARKDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<MARKDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            MARKDbContextConfigurer.Configure(builder, configuration.GetConnectionString(MARKConsts.ConnectionStringName));

            return new MARKDbContext(builder.Options);
        }
    }
}
