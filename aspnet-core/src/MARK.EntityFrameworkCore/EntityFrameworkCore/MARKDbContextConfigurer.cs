using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace MARK.EntityFrameworkCore
{
    public static class MARKDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<MARKDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<MARKDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
