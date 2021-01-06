import MySQLdb

def sqlinit():
    host_glb = 'localhost'
    port_glb = 3306
    user_glb = 'root'
    pwd_glb = '9qqhaoma'
    database_glb = 'BridgeSHM'

    con = MySQLdb.connect(
        host=host_glb,
        port=port_glb,
        user=user_glb,
        passwd=pwd_glb,
        db=database_glb,
        charset='utf8'
    )
    return con